import React from 'react';
import styled from 'styled-components';
import PostCardMainText from './PostCard/PostCardMainText';

const NewsCardForm = styled.article`
  background-color: white;
  padding: 10px 20px;
  ul {
    list-style-type: none;
    padding-left: 0;
  }
`;

const NewsCardHeader = styled.li`
  display: flex;
  align-items: center;

  img {
    width: 14px;
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

const NewsCard = () => {
  return (
    <NewsCardForm>
      <ul>
        <NewsCardHeader>
          <img src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://news.kbs.co.kr/news/view.do?ncd=7138385&size=16" />
          <span>신문사 이름</span>
          <div>2021년 10월 12일</div>
        </NewsCardHeader>
        <PostCardMainText />
      </ul>
    </NewsCardForm>
  );
};

export default NewsCard;
