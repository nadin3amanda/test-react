import React from 'react';
import Banner from './Components/Banner';
import BenefitsBar from './Components/BenefitsBar';
import SiteWideDeals from './Components/SiteWideDeals';
import NavBar from './NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <BenefitsBar />
      <Banner />
      <SiteWideDeals />
      </React.Fragment>
  );
}

export default App;
