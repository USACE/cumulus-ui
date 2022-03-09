import createRestBundle from '@usace/create-rest-bundle';
import { createSelector } from 'redux-bundler';
import { timeDays, utcWeek } from 'd3';

const apiUrl = process.env.REACT_APP_CUMULUS_API_URL;

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

        productYears.forEach((year, i) => {
          console.log(year);
          availabilityByYear[year] = [];

          const waterYearStart = new Date(`10-01-${year - 1}`);
          const waterYearEnd = new Date(`10-01-${year}`);
          const daysOfWaterYear = timeDays(waterYearStart, waterYearEnd);

          // probably an easier way to do this...
          const dayCache = {};
          daysOfWaterYear.forEach((day) => {
            const x = utcWeek.count(waterYearStart, day);
            const y = day.getUTCDay();
            dayCache[`${x}-${y}`] = {
              x: x,
              y: y,
              count: -1,
            };
          });

          // could split these up by year to make this more efficient
          availability.date_counts.forEach(({ date, count = 0 }) => {
            const day = new Date(date);
            const yr = day.getFullYear();
            if (yr === year) {
              const x = utcWeek.count(waterYearStart, day);
              const y = day.getUTCDay();
              console.log(day, count, x, y);
              dayCache[`${x}-${y}`].count = count;
            }
          });

          availabilityByYear[year] = Object.values(dayCache);
        });

        return availabilityByYear;
      }
    ),
  },
});
