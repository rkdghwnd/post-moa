import React, { useCallback } from 'react';
import { AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai';
import { FcCameraIdentification } from 'react-icons/fc';
import styled from 'styled-components';
import DesktopHeader from '../../components/DesktopHeader';
import ProfileEditInput from '../../components/ProfileEditInput';

const EditForm = styled.section`
  background-color: white;
  padding: 20px;
  @media (min-width: 765px) {
    max-width: 800px;
    margin: 0 auto;
    transform: translateY(80px);
  }
`;

const EditFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  & > :first-child {
    margin-right: 10px;
    cursor: pointer;
  }
  & > :last-child {
    margin-right: 10px;
  }
`;

const ProfileImage = styled.div`
  position: relative;
  margin-top: 10px;

  img {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 30px;
    margin: 0 auto 10px auto;
  }

  & > :last-child {
    font-size: 25px;
    position: absolute;
    left: calc(50% + 30px);
    bottom: calc(5%);
  }
`;

const edit = () => {
  const onClickBack = useCallback(() => {
    window.history.back();
  }, []);
  return (
    <>
      <DesktopHeader />
      <EditForm>
        <EditFormHeader>
          <AiOutlineArrowLeft onClick={onClickBack} />
          <span>프로필 수정</span>
          <AiOutlineCheck />
        </EditFormHeader>
        <ProfileImage>
          <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613735253/noticon/mshhmt49mj5qu9aeibko.png" />
          <FcCameraIdentification />
        </ProfileImage>
        <ProfileEditInput />
      </EditForm>
    </>
  );
};

export default edit;
