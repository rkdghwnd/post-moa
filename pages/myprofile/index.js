import React, { useState, useCallback } from 'react';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { BsFileEarmarkPost } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';
import PostCard from '../../components/PostCard/PostCard';
import { FaRegCommentDots } from 'react-icons/fa';
import styled from 'styled-components';
import MyProfileOption from '../../components/MyProfileOption';
import DesktopHeader from '../../components/DesktopHeader';

const MyProfileForm = styled.div`
  background-color: white;
  padding: 20px 20px 0 20px;
  height: 95vh;

  @media (min-width: 765px) {
    max-width: 800px;
    margin: 0 auto;
    transform: translateY(80px);
  }
`;

const MyProfileHeader = styled.div`
  position: relative;
  margin-bottom: 10px;
  span {
    display: block;
    margin: 0 auto;
    width: 75px;
    text-align: center;
    font-size: 18px;
  }

  & > :last-child {
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 0;
  }
`;

const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 30px;
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: orange;
  }
  span {
    margin-bottom: 20px;
  }
`;

const MyProfileRecordButtonForm = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  text-align: center;
  border-top: 1px solid #f5f6f7;
  border-bottom: 1px solid #f5f6f7;

  li {
    flex: 1 1 auto;
    margin: 20px 0;
  }

  li > :first-child {
    font-size: 25px;
  }
  span {
    display: block;
    margin-top: 5px;
  }
`;
const myprofile = () => {
  const [optionVisible, setOptionVisible] = useState(false);
  const onClickOption = useCallback(e => {
    setOptionVisible(optionVisible => !optionVisible);
    e.stopPropagation();
  }, []);
  const onCloseOption = useCallback(e => {
    setOptionVisible(false);
    e.stopPropagation();
  }, []);
  return (
    <>
      <DesktopHeader />
      <MyProfileForm onClick={onCloseOption}>
        <MyProfileHeader>
          <span>프로필</span>
          <IoEllipsisHorizontalSharp onClick={onClickOption} />
        </MyProfileHeader>
        <ProfileImage>
          <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613735253/noticon/mshhmt49mj5qu9aeibko.png"></img>
          <span>피코</span>
          <Link href="/myprofile/edit">
            <a>프로필 소개 추가...</a>
          </Link>
        </ProfileImage>
        <MyProfileRecordButtonForm>
          <li>
            <BsFileEarmarkPost />
            <span>게시글</span>
          </li>
          <li>
            <FaRegCommentDots />
            <span>댓글</span>
          </li>
          <li>
            <BsBookmark />
            <span>북마크</span>
          </li>
        </MyProfileRecordButtonForm>
        <PostCard />
        {optionVisible ? (
          <MyProfileOption optionVisible={optionVisible} />
        ) : null}
      </MyProfileForm>
      <Footer />
    </>
  );
};

export default myprofile;
