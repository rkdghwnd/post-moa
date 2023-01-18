import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import MainContentsWrapper from '../components/MainContentsWrapper';
import DesktopHeader from '../components/DesktopHeader';
const news = () => {
  return (
    <>
      <DesktopHeader />
      <MainContentsWrapper>
        <NavBar />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </MainContentsWrapper>
      <Footer />
    </>
  );
};

export default news;
