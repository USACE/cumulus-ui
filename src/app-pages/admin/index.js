import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from '../../app-components/Header';
import HomeStats from './home-stats';
import Footer from '../../app-components/footer/footer';

import { connect } from 'redux-bundler-react';

const Dashboard = connect(
  'selectAuthIsLoggedIn',
  'selectAuthRoles',
  ({ authIsLoggedIn: isLoggedIn, authRoles: roles }) => {
    // User Is Admin
    const isAdmin =
      isLoggedIn && roles && roles.indexOf('application.admin') !== -1;

    if (!isAdmin) {
      return 'not authorized';
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <div className='flex h-screen overflow-hidden'>
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className='container mx-auto h-full'>
            <HomeStats />
            <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
              {/* Main home content */}

              <div className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum auctor pretium lectus, at rutrum lorem finibus ut.
                Morbi pulvinar vestibulum imperdiet. Praesent non libero
                fermentum est gravida porta eget eget turpis. Donec nec sodales
                risus. Aliquam finibus, dolor vel imperdiet rhoncus, augue
                tellus posuere lacus, a vulputate ante lectus vitae lorem.
                Curabitur vehicula imperdiet arcu eu efficitur. Quisque congue
                pellentesque arcu. Quisque imperdiet sollicitudin justo sed
                dictum. Nunc purus odio, aliquam vitae lorem sed, porttitor
                lobortis nunc. Ut pretium congue pharetra. Phasellus dui massa,
                semper in malesuada non, mollis non ipsum. Nullam bibendum sem
                non ornare dignissim. Integer ornare nisi at sapien efficitur
                semper. Sed id elementum arcu, vitae sodales ex. Mauris rhoncus
                sem vitae metus ultricies, ut sollicitudin enim ornare. Duis
                feugiat id ante vitae varius. In interdum tincidunt mi sed
                sagittis. Duis sed faucibus orci. Aliquam tristique accumsan
                tempus. Etiam eleifend, nisi nec euismod consequat, ipsum purus
                lacinia massa, ut blandit velit nisi eget quam. Mauris malesuada
                arcu eu tempus egestas. Donec suscipit cursus semper. Cras sit
                amet ligula massa. Fusce sed magna egestas magna varius
                tincidunt. Vivamus dapibus nulla vitae diam egestas gravida.
                Etiam eget risus et lectus finibus ultricies vitae non eros.
                Morbi lobortis hendrerit mi vitae vulputate. Fusce id turpis
                quis nibh ultricies tempor. In ante nulla, auctor ac risus in,
                tincidunt egestas dolor. Donec id nisl facilisis, condimentum
                erat in, aliquam ex. Aliquam volutpat aliquet varius.
                Suspendisse lobortis tellus pharetra massa ultricies aliquam.
                Sed sodales nulla odio, a vehicula nisl volutpat quis. Phasellus
                eget semper purus, et rutrum urna. Aliquam ultricies vel arcu ac
                luctus.
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    );
  }
);

export default Dashboard;
