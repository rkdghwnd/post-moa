import React from 'react';
import styled from 'styled-components';

const MainTextForm = styled.section``;
const PostUserInfo = styled.div`
  height: 60px;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 15px;
    margin-right: 10px;
  }
  span:last-child {
    position: absolute;
    right: 0;
  }
`;

const PostTitle = styled.h3`
  font-weight: 400;
`;

const PostBody = styled.p`
  line-height: 24px;
  margin-top: 20px;
`;

const ViewsCommentsLiked = styled.div`
  font-size: 14px;
  margin: 15px 0;
  color: rgb(160, 160, 160);
  & > span:not(:last-child) {
    margin-right: 10px;
  }
`;

const PostMainText = () => {
  return (
    <MainTextForm>
      <PostUserInfo>
        <img src="https://res.cloudinary.com/dhfi7dxpu/image/upload/v1622725408/picar_profile/enbe81godbxt3uyulnvd.jpg" />
        <span>닉네임</span>
        <span>2021년 10월 12일</span>
      </PostUserInfo>
      <PostTitle>엘지유플러스 전기차 충전기 무상설치 해드립니다.</PostTitle>
      <PostBody>
        이제 필수가 된 전기차 충전기
        <br />
        이제 필수가 된 전기차 중천기 엘지유플러스
        <br />
        에서 무상설치 해드리고 있습니다 충전속도 7kWh 인데도 저렴한 프로모션
        충전요금 180원
        <br /> 아파트 오피스텔 빌딩 상가 호텔 공장 농장등 주차장이 있는곳이라면
        어디라도 설치가능합니다. <br />
        <br />
        관련영상 : https://youtu.be/eAcMuDQ-rU0 <br />
        신청서 작성 : https://naver.me/x8iMIb8e
        <br />
        <br />
        <img src="https://static.picar.kr/dhfi7dxpu/image/upload/v1668845467/picar_post/r5nvrvxrpkhhmbozwpi2.jpg"></img>
      </PostBody>
      <ViewsCommentsLiked>
        <span>조회 31회</span>
        <span>댓글 0</span>
        <span>공감 0</span>
      </ViewsCommentsLiked>
    </MainTextForm>
  );
};

export default PostMainText;
