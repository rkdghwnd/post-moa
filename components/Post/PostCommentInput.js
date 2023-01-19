import React from 'react';
import styled from 'styled-components';
import { AiFillCaretRight } from 'react-icons/ai';

const CommentInputForm = styled.div`
  padding: 0 20px;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 60px;
  border-top: 1px solid #f5f6f7;
  img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
  input {
    flex: 1 1 auto;
    outline: none;
    border: none;
    margin: 0 10px;
  }
  button {
    all: unset;
    cursor: pointer;
  }
  button > :first-child {
    font-size: 30px;
    color: rgb(217, 217, 217);
  }
`;
const PostCommentInput = () => {
  return (
    <CommentInputForm>
      <img src="https://res.cloudinary.com/dhfi7dxpu/image/upload/v1622725408/picar_profile/enbe81godbxt3uyulnvd.jpg" />
      <input placeholder="댓글을 입력하세요" type="text" style={{}} />
      <button>
        <AiFillCaretRight />
      </button>
    </CommentInputForm>
  );
};

export default PostCommentInput;
