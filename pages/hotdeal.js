import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HotDealCard from '../components/HotDealCard';
import MainContentsWrapper from '../components/MainContentsWrapper';
import DesktopHeader from '../components/DesktopHeader';

const hotdeal = () => {
  return (
    <>
      <DesktopHeader />
      <MainContentsWrapper>
        <NavBar />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
        <HotDealCard />
      </MainContentsWrapper>
      <Footer />
    </>
  );
};

export default hotdeal;
