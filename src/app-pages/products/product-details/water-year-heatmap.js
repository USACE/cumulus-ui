import { useEffect, useRef, useMemo } from 'react';
import * as Plot from '@observablehq/plot';
import { timeMonth, utcTicks, utcWeek } from 'd3';
import useElementSize from '../../../custom-hooks/useElementSize';
import { mergeRefs } from '../../../utils';

// width to height ratio to make our cells square
const ratio = 640 / 130;

export default function WaterYearHeatMap({ year = 2022, data }) {
  const values = data[year];

  const ticks = useMemo(() => {
    const waterYearStart = new Date(`10-01-${year - 1}`);
    const waterYearEnd = new Date(`10-01-${year}`);
    const t = {};
    utcTicks(waterYearStart, waterYearEnd, timeMonth).forEach((tickDate) => {
      const x = utcWeek.count(waterYearStart, tickDate);
      const label = tickDate.toLocaleString('default', { month: 'short' });
      t[x] = label;
    });
    return t;
  }, [year]);

  const elRef = useRef();
  const [sizeRef, { width }] = useElementSize();

  useEffect(() => {
    if (!values) return null;
    const Chart = Plot.plot({
      height: width / ratio,
      width: width,
      x: {
        axis: 'bottom',
        ticks: Number(Object.keys(ticks)),
        tickFormat: (i) => {
          return ticks[i];
        },
        tickSize: 0,
        tickPadding: 0,
        align: 0.5,
        padding: 0,
        nice: true,
      },
      y: {
        padding: 0,
        tickFormat: Plot.formatWeekday('en', 'narrow'),
        tickSize: 0,
      },
      fy: {
        reverse: true,
      },
      color: {
        type: 'diverging',
        scheme: 'bugn',
      },
      marks: [
        Plot.cell(values, {
          x: (d) => d.x,
          y: (d) => d.y,
          fill: (d) => d.count,
          // title: (d, i) =>
          //   i > 0
          //     ? (
          //         ((d.Close - DJI[i - 1].Close) / DJI[i - 1].Close) *
          //         100
          //       ).toFixed(1)
          //     : NaN,
          inset: 0.6,
        }),
      ],
    });
    elRef.current.append(Chart);
    return () => Chart.remove();
  }, [elRef, values, ticks, width]);

  return (
    <div className='w-full'>
      <div className='mt-3 mb-2 max-w-2xl text-sm text-gray-500'>{`Water Year ${year}`}</div>
      <div className='w-full' ref={mergeRefs(elRef, sizeRef)} />
    </div>
  );
}
