import { connect } from 'redux-bundler-react';
import HeatMap from './water-year-heatmap';

export default connect(
  'selectProductavailabilityByWaterYearByRoute',
  ({ productavailabilityByWaterYearByRoute: productAvailability }) => {
    return (
      <div>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>
          Availabiltiy
        </h3>
        <div className='w-full'>
          {productAvailability && (
            <HeatMap width={'100%'} data={productAvailability} />
          )}
        </div>
      </div>
    );
  }
);
