import { connect } from 'redux-bundler-react';
import FilterPanelGroup from './filter-panel-group';

export default connect(
  'selectProductFilterParameters',
  'selectProductParametersAsObjects',
  'doProductFilterSetParameters',
  function ParameterFilter({
    productFilterParameters: filterParameters,
    productParametersAsObjects: parameters,
    doProductFilterSetParameters,
  }) {
    return (
      <FilterPanelGroup
        title='Filter By Tag'
        checkedItems={filterParameters}
        items={parameters}
        onChange={doProductFilterSetParameters}
      />
    );
  }
);
