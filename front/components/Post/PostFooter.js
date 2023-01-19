import React from 'react';
import styled from 'styled-components';
import { FaSmile, FaRegComment, FaRegCommentDots } from 'react-icons/fa';
import { CiShare1 } from 'react-icons/ci';
import { AiFillCaretRight } from 'react-icons/ai';

const PostFooterButtonForm = styled.div`
  margin-top: 1px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #f5f6f7;
  border-bottom: 1px solid #f5f6f7;
  color: rgb(160, 160, 160);

  div > :first-child {
    margin-right: 10px;
  }
`;

const PostFooter = () => {
  return (
    <>
      <PostFooterButtonForm>
        <div>
          <FaSmile />
          <span>좋아요</span>
        </div>
        <div>
          <FaRegComment />
          <span>댓글쓰기</span>
        </div>
        <div>
          <CiShare1 />
          <span>공유하기</span>
        </div>
      </PostFooterButtonForm>
    </>
  );
};

export default PostFooter;
