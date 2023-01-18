import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HotIssueCard from '../components/HotIssueCard';
import DesktopHeader from '../components/DesktopHeader';
import styled from 'styled-components';
import LogInModal from '../components/LogInModal';
import MainContentsWrapper from '../components/MainContentsWrapper';

const home = () => {
  return (
    <>
      <DesktopHeader />
      <MainContentsWrapper>
        <NavBar />
        <HotIssueCard />
        <HotIssueCard />
        <HotIssueCard />
        <HotIssueCard />
        <HotIssueCard />
        <HotIssueCard />
        <HotIssueCard />
        <HotIssueCard />
        <HotIssueCard />
        <HotIssueCard />
        <HotIssueCard />
      </MainContentsWrapper>
      <Footer />
      <LogInModal />
    </>
  );
};

export default home;
