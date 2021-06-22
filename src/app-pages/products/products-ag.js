import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { connect } from 'redux-bundler-react';
import Sidebar from '../../app-components/Sidebar';
import Header from '../../app-components/Header';
import { formatDistance, formatDistanceToNow, parseISO } from 'date-fns';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Products({ doProductFetch, productItemsArray: products }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    doProductFetch();
  }, [doProductFetch]);

  // const [gridApi, setGridApi] = useState(null);
  // const [gridColumnApi, setGridColumnApi] = useState(null);

  // const onGridReady = (params) => {
  //   setGridApi(params.api);
  //   setGridColumnApi(params.columnApi);
  // };

  function durationFormatter(params) {
    return params.value / 60 / 60 + ' hr';
  }

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Cards */}
            {/* <div className='grid grid-cols-12 gap-6'> */}
            {/* {products && products.length
                ? products.map((p, idx) => JSON.stringify(p.name))
                : null} */}
            <div
              className='ag-theme-alpine shadow overflow-hidden w-full border-b border-gray-200'
              style={{ height: 500 }}
            >
              {/* {Table here} */}
              <AgGridReact
                rowData={products}
                defaultColDef={{
                  flex: 1,
                  cellClass: 'number-cell',
                  resizable: true,
                }}
                // onGridReady={onGridReady}
              >
                <AgGridColumn field='name' sortable={true}></AgGridColumn>
                <AgGridColumn
                  field='parameter'
                  sortable={true}
                  filter={true}
                ></AgGridColumn>
                <AgGridColumn
                  headerName='Duration'
                  field='temporal_duration'
                  valueFormatter={durationFormatter}
                ></AgGridColumn>
                <AgGridColumn field='dss_fpart'></AgGridColumn>
                <AgGridColumn
                  headerName='Latest Record'
                  field='before'
                  sortable={true}
                  filter={true}
                ></AgGridColumn>
              </AgGridReact>
            </div>
          </div>
          {/* </div> */}
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default connect('selectProductItemsArray', 'doProductFetch', Products);
