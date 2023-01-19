import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const MainTextWrapper = styled.div`
  a {
    text-decoration: none;
  }
`;

const MainTextForm = styled.li`
  display: flex;
  justify-content: space-between;

  h4 {
    font-weight: 500;
    margin: 10px 10px 10px 0;
    color: black;
  }
  p {
    font-size: 14px;
    color: rgb(153, 153, 153);
    margin-right: 10px;
  }
  & > div:last-child {
    margin-top: 10px;
  }
  img {
    width: 80px;
    height: 80px;
  }
`;
const PostCardMainText = () => {
  return (
    <MainTextWrapper>
      <Link href="/post">
        <a>
          <MainTextForm>
            <div>
              <h4>공동 주택 충전소가 더 많이 생겨야 할 것 같은데요..</h4>
              <p>
                지금 정책보다 더 많은 비율로 전기차가 시장에 풀리는데.. 더 많이
                충전소는 더 많았으면 좋겠습니다.
              </p>
            </div>
            <div>
              <img src="https://static.picar.kr/dhfi7dxpu/image/upload/v1634004242/picar_post/y2bhz2g2hrbc6oqbqnbd.jpg" />
            </div>
          </MainTextForm>
        </a>
      </Link>
    </MainTextWrapper>
  );
};

export default PostCardMainText;
