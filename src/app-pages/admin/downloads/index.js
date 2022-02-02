import React from 'react';
import DownloadStats from './download-stats';

import AdminWrapper from '../../../app-components/admin/AdminWrapper';

export default function AdminDownloads() {
  return (
    <AdminWrapper>
      <DownloadStats />
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Main content */}

        <div className=''>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          auctor pretium lectus, at rutrum lorem finibus ut. Morbi pulvinar
          vestibulum imperdiet. Praesent non libero fermentum est gravida porta
          eget eget turpis. Donec nec sodales risus. Aliquam finibus, dolor vel
          imperdiet rhoncus, augue tellus posuere lacus, a vulputate ante lectus
          vitae lorem. Curabitur vehicula imperdiet arcu eu efficitur. Quisque
          congue pellentesque arcu. Quisque imperdiet sollicitudin justo sed
          dictum. Nunc purus odio, aliquam vitae lorem sed, porttitor lobortis
          nunc.
        </div>
      </div>
    </AdminWrapper>
  );
}
