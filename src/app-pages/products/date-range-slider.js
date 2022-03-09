import {
  format,
  fromUnixTime,
  getUnixTime,
  milliseconds,
  millisecondsToSeconds,
  minutesToHours,
  secondsToMinutes,
} from 'date-fns';
import { useState, useRef, useEffect } from 'react';

// convert a value  from a duration object r.e. https://date-fns.org/v2.28.0/docs/Duration
// to an object with the equivalent durations in all units
// really only using for days to seconds, but needs testing
function duration_to_all_units(duration) {
  const ms = milliseconds(duration);
  const seconds = millisecondsToSeconds(ms);
  const minutes = secondsToMinutes(seconds);
  const hours = minutesToHours(minutes);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4); // hard to go up, easy to go down... not sure what to do here
  const years = Math.floor(months / 12);
  return { seconds, minutes, hours, days, weeks, months, years };
}

export default function DateRangeSlider({
  minDate,
  maxDate,
  stepDuration = { days: 1 },
  onChange,
}) {
  const min = getUnixTime(minDate);
  const max = getUnixTime(maxDate);
  const [from, setFrom] = useState(min);
  const [to, setTo] = useState(max);
  const step = duration_to_all_units(stepDuration)['seconds'];

  useEffect(() => {
    setFrom(min);
    setTo(max);
  }, [min, max]);

  useEffect(() => {
    onChange({ from: fromUnixTime(from), to: fromUnixTime(to) });
  }, [onChange, from, to]);

  const barRef = useRef();
  const labelRefFrom = useRef();
  const labelRefTo = useRef();

  let barWidth = 0;
  if (barRef.current) {
    barWidth = barRef.current.offsetWidth;
  }

  let labelWidthFrom = 0;
  if (labelRefFrom.current) {
    labelWidthFrom = labelRefFrom.current.offsetWidth;
  }

  let labelWidthTo = 0;
  if (labelRefTo.current) {
    labelWidthTo = labelRefTo.current.offsetWidth;
  }

  const offsetFrom = ((from - min) / (max - min)) * (barWidth - labelWidthFrom);
  const offsetTo = ((to - min) / (max - min)) * (barWidth - labelWidthTo);

  const rangeBarFrom = ((from - min) / (max - min)) * (barWidth - 12) + 6;
  const rangeBarTo = ((to - min) / (max - min)) * (barWidth - 12) + 6;

  // handle range drag
  const [firstClientX, setfirstClientX] = useState(null);
  const handleRangeDrag = (e) => {
    if (!firstClientX) {
      setfirstClientX(e.clientX);
    } else {
      // time increment per pixel
      const ratio = (max - min) / barWidth;
      // change in pixels
      const deltaX = e.clientX - firstClientX;
      // change in time increment
      const deltaT = Math.round(deltaX * ratio);
      console.log(duration_to_all_units({ seconds: deltaT }));
      // new times
      const newFrom = from + deltaT;
      const newTo = to + deltaT;
      if (newFrom >= min && newTo <= max) {
        setFrom(newFrom);
        setTo(newTo);
      } else {
        console.log(Math.round(newFrom) - min, max - Math.round(newTo));
      }
    }
  };

  const handleDragEnd = (e) => {
    setfirstClientX(null);
  };

  return (
    <div className='relative w-full h-10 m-5'>
      <div className='absolute bottom-4 top-4 rounded-full z-2 w-full h-2 bg-gray-300'></div>
      <div
        className='absolute z-0 h-full border-l-2 border-r-2 border-gray-500 bg-sky-900/20'
        style={{
          left: `${rangeBarFrom}px`,
          right: `${barWidth - rangeBarTo}px`,
        }}
        draggable
        onDrag={handleRangeDrag}
        onDragEnd={handleDragEnd}
      ></div>
      <div
        className='absolute rounded-full w-3 h-3 bottom-12 text-sm font-medium text-gray-700'
        style={{ left: `${offsetFrom}px` }}
      >
        <label ref={labelRefFrom} className='w-full'>
          {format(fromUnixTime(from), 'MM/dd/yyyy')}
        </label>
      </div>
      <div
        className='absolute rounded-full w-3 h-3 top-10 text-sm font-medium text-gray-700'
        style={{ left: `${offsetTo}px` }}
      >
        <label ref={labelRefTo} className='w-full'>
          {format(fromUnixTime(to), 'MM/dd/yyyy')}
        </label>
      </div>
      <input
        ref={barRef}
        className='absolute z-10 form-range appearance-none w-full h-10 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none pointer-events-none thumb-pointer-events-auto'
        type='range'
        min={min}
        max={max}
        step={step}
        value={from}
        onChange={(e) => {
          setFrom(e.target.value);
        }}
      />
      <input
        className='absolute z-11 form-range appearance-none w-full h-10 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none pointer-events-none thumb-pointer-events-auto'
        type='range'
        min={min}
        max={max}
        step={step}
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
        }}
      />
    </div>
  );
}
