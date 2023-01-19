import React, { useState, useCallback } from 'react';
import { BsSearch, BsBellFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiFillInfoCircle, AiOutlineComment } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import InfoModal from './InfoModal';
import Link from 'next/link';
import styled from 'styled-components';
import NewPostModal from './NewPostModal';

const FooterForm = styled.section`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-top: 1px solid rgb(230, 230, 230);
  color: rgb(153, 153, 153);

  a {
    text-decoration: none;
    color: rgb(153, 153, 153);
  }

  a > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
  }
  a > div > span {
    font-size: 12px;
    margin-top: 5px;
  }

  @media (min-width: 765px) {
    display: none;
  }
`;

const InfoLink = styled.div``;

const WritePostButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: skyblue;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  bottom: 75px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
`;

const Footer = () => {
  const [infoOpened, setInfoOpened] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [newPostOpened, setNewPostOpened] = useState(false);
  const [newPostVisible, setNewPostVisible] = useState(false);

  const onClickAppInfo = useCallback(() => {
    setInfoOpened(infoOpened => !infoOpened);
    if (infoVisible) {
      setTimeout(() => {
        setInfoVisible(infoVisible => !infoVisible);
      }, 300);
    } else {
      setInfoVisible(infoVisible => !infoVisible);
    }
  }, [infoVisible]);

  const onClickNewPost = useCallback(() => {
    setNewPostOpened(infoOpened => !infoOpened);
    if (newPostVisible) {
      setTimeout(() => {
        setNewPostVisible(newPostVisible => !newPostVisible);
      }, 300);
    } else {
      setNewPostVisible(newPostVisible => !newPostVisible);
    }
  }, [newPostVisible]);

  return (
    <>
      <FooterForm>
        <Link href="/">
          <a>
            <div>
              <AiOutlineComment />
              <span>커뮤니티</span>
            </div>
          </a>
        </Link>

        <Link href="/search">
          <a>
            <div>
              <BsSearch />
              <span>검색</span>
            </div>
          </a>
        </Link>

        <Link href="/notification">
          <a>
            <div>
              <BsBellFill />
              <span>알림</span>
            </div>
          </a>
        </Link>

        <InfoLink onClick={onClickAppInfo}>
          <a>
            <div>
              <AiFillInfoCircle />
              <span>정보</span>
            </div>
          </a>
        </InfoLink>

        <Link href="/myprofile">
          <a>
            <div>
              <CgProfile />
              <span>프로필</span>
            </div>
          </a>
        </Link>

        <WritePostButton onClick={onClickNewPost}>
          <FaPencilAlt />
        </WritePostButton>
      </FooterForm>
      {infoVisible ? (
        <InfoModal onClickAppInfo={onClickAppInfo} infoOpened={infoOpened} />
      ) : (
        ''
      )}
      {newPostVisible ? (
        <NewPostModal
          newPostOpened={newPostOpened}
          onClickNewPost={onClickNewPost}
        />
      ) : null}
    </>
  );
};

export default Footer;
