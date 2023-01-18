import React from 'react';
import DesktopHeader from '../components/DesktopHeader';
import Footer from '../components/Footer';
import LogInModal from '../components/LogInModal';
import MainContentsWrapper from '../components/MainContentsWrapper';
import NavBar from '../components/NavBar';
import PostCard from '../components/PostCard/PostCard';

const free = () => {
  return (
    <>
      <DesktopHeader />
      <MainContentsWrapper>
        <NavBar />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </MainContentsWrapper>
      <Footer />
      {/* <LogInModal /> */}
    </>
  );
};

export default free;
