import React from 'react';
import styled from 'styled-components';
import { FaRegCommentDots } from 'react-icons/fa';

const EmptyCommentForm = styled.div`
  border-top: 2px solid #f5f6f7;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(217, 217, 217);
  border-bottom: 1px solid #f5f6f7;

  & > :first-child {
    font-size: 35px;
    margin-bottom: 20px;
  }
`;

const CommentForm = styled.article`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #f5f6f7;
  img {
    width: 35px;
    height: 35px;
    border-radius: 13px;
  }
  & > div {
    margin-left: 10px;
    font-size: 14px;
  }
`;

const CommentBody = styled.p`
  margin: 5px 0;
  line-height: 20px;
`;

const CommentSubMenu = styled.div`
  font-size: 13px;
  padding: 5px 0;

  & > span:first-child {
    color: rgb(153, 153, 153);
  }

  & > span:nth-child(2) {
    margin-left: 20px;
    color: rgb(102, 102, 102);
  }

  & > span:last-child {
    margin-left: 15px;
    color: rgb(102, 102, 102);
  }
`;

const Comment = () => {
  return (
    <>
      {/* <EmptyCommentForm>
        <FaRegCommentDots />
        <span>첫 댓글을 남겨주세요</span>
      </EmptyCommentForm> */}

      <CommentForm>
        <img src="https://static.picar.kr/dhfi7dxpu/image/upload/v1669212686/picar_profile/fzpepodhgmc3x8spzkyu.png" />
        <div>
          <h4>오닉이</h4>
          <CommentBody>
            생각난게 택시는 충전시간 생각하면 못할꺼같긴한데요? 중간에
            떨어지기라도 한다면 피크타임에 장사 못할수도.. 라는 희망을..
          </CommentBody>
          <CommentSubMenu>
            <span>2021년 8월 28일</span>
            <span>답글 달기</span>
            <span>신고 하기</span>
          </CommentSubMenu>
        </div>
      </CommentForm>
    </>
  );
};

export default Comment;
