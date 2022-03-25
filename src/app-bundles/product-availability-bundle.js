import createRestBundle from '@usace/create-rest-bundle';
import { createSelector } from 'redux-bundler';
import { utcDays, utcWeek } from 'd3';

const apiUrl = process.env.REACT_APP_CUMULUS_API_URL;

function waterYearFromDate(date) {
  const month = date.getMonth();
  let year = date.getFullYear();
  if (month >= 9) year = year + 1;
  return year;
}

function scaffoldWaterYear(waterYear) {
  const dayCache = {};
  const waterYearStart = new Date(`01-OCT-${waterYear - 1}`);
  const waterYearEnd = new Date(`01-OCT-${waterYear}`);
  const days = utcDays(waterYearStart, waterYearEnd);
  days.forEach((day) => {
    const x = utcWeek.count(waterYearStart, day);
    const y = day.getUTCDay();
    dayCache[`${x}-${y}`] = {
      x: x,
      y: y,
      count: null,
      date: day,
    };
  });
  return dayCache;
}

export default createRestBundle({
  name: 'productavailability',
  uid: 'product_id',
  prefetch: true,
  staleAfter: 30000, //5min
  persist: false,
  routeParam: 'product_id',
  getTemplate: `${apiUrl}/products/:product_id/availability`,
  fetchActions: ['URL_UPDATED'],
  urlParamSelectors: ['selectProductIdByRoute'],
  forceFetchActions: [],
  sortBy: 'date',
  sortAsc: true,
  addons: {
    selectProductavailabilityByWaterYearByRoute: createSelector(
      'selectProductavailabilityByRoute',
      'selectProductYearsByRoute',
      (availability, productYears) => {
        if (!availability || !productYears) return {};
        const availabilityByYear = {};

        availability.date_counts.forEach(({ date, count = 0 }) => {
          // hack for dealing with UTC times on these datetimes
          date = date.replace('T00', 'T10');
          const day = new Date(date);
          const waterYear = waterYearFromDate(day);
          const waterYearStart = new Date(`01-OCT-${waterYear - 1}`);
          const x = utcWeek.count(waterYearStart, day);
          const y = day.getUTCDay();

          if (!availabilityByYear[waterYear])
            availabilityByYear[waterYear] = scaffoldWaterYear(waterYear);

          availabilityByYear[waterYear][`${x}-${y}`] = {
            x: x,
            y: y,
            count: count,
            date: day,
          };
        });

        return availabilityByYear;
      }
    ),
  },
});
