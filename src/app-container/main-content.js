import { connect } from 'redux-bundler-react';
import Header from './header';

export default connect('selectRoute', ({ route: Route, setMobileMenuOpen }) => {
  return (
    <div className='flex-1 flex flex-col overflow-hidden'>
      <Header setMobileMenuOpen={setMobileMenuOpen} />
      <div className='flex-1 flex items-stretch overflow-hidden'>
        <main className='flex-1 overflow-y-auto'>
          {/* Primary column */}
          <section
            aria-labelledby='primary-heading'
            className='min-w-0 flex-1 h-full flex flex-col lg:order-last'
          >
            <Route />
          </section>
        </main>
      </div>
    </div>
  );
});
