import React from 'react';
import styled from 'styled-components';

const HotIssueCardForm = styled.article`
  padding: 10px 20px;
  background-color: white;
  display: flex;

  img {
    width: 80px;
    height: 80px;
  }

  & > div:first-child {
    background-color: violet;
    width: 20px;
    height: 80px;
    vertical-align: top;
    text-align: center;
    line-height: 75px;
    border-radius: 2px 0 0 2px;
  }

  & > div:last-child {
    margin-left: 10px;
    flex: 1 1 auto;
  }
`;

const HotIssueCardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    font-size: 12px;
    background-color: skyblue;
    color: white;
    border-radius: 5px;
    padding: 3px;
  }
  span {
    color: rgb(170, 170, 170);
    font-size: 14px;
  }
`;

const HotIssueTitle = styled.h3`
  line-height: 50px;
  font-weight: 400;
  font-size: 15px;
`;

const HotIssueCard = () => {
  return (
    <HotIssueCardForm>
      <div>
        <span>1</span>
      </div>
      <img src="https://static.picar.kr/dhfi7dxpu/image/upload/v1658210536/picar_thumbnail/tf9dbynnrjxifhc5gnyc.png" />
      <div>
        <HotIssueCardHeader>
          <div>에펨코리아</div>
          <span>2021년 10월 12일</span>
        </HotIssueCardHeader>
        <HotIssueTitle>이 글을 반드시 베스트로 보내고 싶습니다.</HotIssueTitle>
      </div>
    </HotIssueCardForm>
  );
};

export default HotIssueCard;
