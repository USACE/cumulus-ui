import { useState } from 'react';
import MainContent from './main-content';
import Sidebar from './sidebar';

export default function AppContainer() {
  // could use a hook or bundle to do this, but put it here for simplicity's sake
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='h-full flex'>
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MainContent setMobileMenuOpen={setMobileMenuOpen} />
    </div>
  );
}
