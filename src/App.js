import React from 'react';
import Banner from './Components/Banner';
import BenefitsBar from './Components/BenefitsBar';
import NewArrivals from './Components/NewArrivals';
import NowTrending from './Components/NowTrending';
import RecentlyBought from './Components/RecentlyBought';
import SiteWideDeals from './Components/SiteWideDeals';
import YourNextInspo from './Components/YourNextInspo';
import SignUp from './Components/SignUp';
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
      <RecentlyBought />
      <YourNextInspo />
      <SignUp />
      </React.Fragment>
  );
}

export default App;
