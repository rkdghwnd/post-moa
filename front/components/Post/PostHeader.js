import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { RiAlarmWarningLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';

const PostHeaderForm = styled.nav`
  font-size: 24px;
  position: relative;
  height: 30px;
  background-color: white;

  & > * {
    position: absolute;
  }

  & > :first-child {
    cursor: pointer;
  }
  & > :nth-child(2) {
    right: 50px;
    bottom: 10px;
  }
  & > :last-child {
    right: 10px;
    font-size: 20px;
  }
`;

const PostHeader = () => {
  return (
    <PostHeaderForm>
      <AiOutlineArrowLeft
        onClick={() => {
          window.history.back();
        }}
      />
      <RiAlarmWarningLine />
      <BsBookmark />
    </PostHeaderForm>
  );
};

export default PostHeader;
