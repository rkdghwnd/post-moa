import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import CommentModal from '../CommentModal';
import PostCardMainText from './PostCardMainText';
import PostCardFooter from './PostCardFooter';

const PostCardForm = styled.article`
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 10px;
  ul {
    list-style-type: none;

    padding-left: 0;
  }
`;

const PostCardHeader = styled.li`
  display: flex;
  align-items: center;

  img {
    width: 25px;
    border-radius: 50%;
  }
  div {
    flex: 1 1 auto;
    text-align: right;
    font-weight: 400;
    color: #c6c6c6;
    font-size: 14px;
  }
  span {
    margin-left: 10px;
  }
`;

const PostCard = () => {
  const [isOpenedComment, setIsOpenedComment] = useState(false);
  const [visible, setVisible] = useState(false);
  const onClickComment = useCallback(() => {
    setIsOpenedComment(isOpenedComment => !isOpenedComment);
    if (visible) {
      setTimeout(() => {
        setVisible(visible => !visible);
      }, 300);
    } else {
      setVisible(visible => !visible);
    }
  }, [visible]);

  return (
    <PostCardForm>
      <ul>
        <PostCardHeader>
          <img src="https://res.cloudinary.com/dhfi7dxpu/image/upload/v1622725408/picar_profile/enbe81godbxt3uyulnvd.jpg" />
          <span>닉네임</span>
          <div>2021년 10월 12일</div>
        </PostCardHeader>
        <PostCardMainText />
        <PostCardFooter onClickComment={onClickComment} />
      </ul>
      {visible ? (
        <CommentModal
          onClickComment={onClickComment}
          isOpenedComment={isOpenedComment}
        />
      ) : (
        ''
      )}
    </PostCardForm>
  );
};

export default PostCard;
