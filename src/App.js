import React from 'react';
import Banner from './Components/Banner';
import BenefitsBar from './Components/BenefitsBar';
import NewArrivals from './Components/NewArrivals';
import NowTrending from './Components/NowTrending';
import SiteWideDeals from './Components/SiteWideDeals';
import NavBar from './NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <BenefitsBar />
      <Banner />
      <SiteWideDeals />
      <NowTrending />
      <NewArrivals />
      </React.Fragment>
  );
}

export default App;
