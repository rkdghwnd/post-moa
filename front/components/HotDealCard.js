import React from 'react';
import styled from 'styled-components';

const HotDealCardForm = styled.article`
  padding: 10px 20px;
  background-color: white;
  display: flex;

  img {
    width: 80px;
    height: 80px;
  }

  & > div:last-child {
    margin-left: 10px;
    flex: 1 1 auto;
  }
`;

const HotDealCardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
  span {
    color: rgb(170, 170, 170);
    font-size: 14px;
  }
`;
const Label = styled.div`
  font-size: 12px;
  background-color: skyblue;
  color: white;
  border-radius: 5px;
  padding: 3px;
  margin: 0 5px 0 0;
`;

const HotDealTitle = styled.h3`
  margin-top: 10px;
  line-height: 20px;
  font-weight: 400;
  font-size: 15px;
`;

const HotDealCard = () => {
  return (
    <HotDealCardForm>
      <img src="https://static.picar.kr/dhfi7dxpu/image/upload/v1658210536/picar_thumbnail/tf9dbynnrjxifhc5gnyc.png" />
      <div>
        <HotDealCardHeader>
          <div>
            <Label>핫딜</Label>
            <Label>에펨코리아</Label>
          </div>

          <span>2021년 10월 12일</span>
        </HotDealCardHeader>
        <HotDealTitle>
          <a href="/#">
            [지마켓]LG 27GP830 울트라기어 게이밍모니터 (439,320원/무료)
          </a>
        </HotDealTitle>
      </div>
    </HotDealCardForm>
  );
};

export default HotDealCard;
