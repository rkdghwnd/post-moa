import React from 'react';
import PostCard from '../components/PostCard/PostCard';
import Footer from '../components/Footer';
import styled from 'styled-components';
import DesktopHeader from '../components/DesktopHeader';

const NotificationHeader = styled.header`
  background-color: white;
  & > div:first-child {
    font-size: 18px;
    padding: 20px;
    text-align: center;
    border-bottom: 2px solid #f5f6f7;
  }
  @media (min-width: 765px) {
    max-width: 800px;
    margin: 0 auto;
    transform: translateY(80px);
  }
`;

const notification = () => {
  return (
    <>
      <DesktopHeader />
      <NotificationHeader>
        <div>알림</div>
        <PostCard />
      </NotificationHeader>
      <Footer />
    </>
  );
};

export default notification;
