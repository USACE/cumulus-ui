import { connect } from 'redux-bundler-react';
import FilterPanelGroup from './filter-panel-group';

export default connect(
  'selectProductFilterTags',
  'selectTagItems',
  'doProductFilterSetTags',
  function TagFilter({
    productFilterTags: filterTags,
    tagItems: tags,
    doProductFilterSetTags,
  }) {
    return (
      <FilterPanelGroup
        title='Filter By Tag'
        checkedItems={filterTags}
        items={tags}
        onChange={doProductFilterSetTags}
      />
    );
  }
);
