import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsSearch, BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import Footer from '../components/Footer';
import styled from 'styled-components';
import RecommendKeyword from '../components/RecommendKeyword';
import DesktopHeader from '../components/DesktopHeader';

const SearchWrapper = styled.section`
  margin: 0 auto 10px auto;
  max-width: 800px;
  padding: 10px;
  background-color: white;

  h4 {
    padding: 15px 15px 15px 0;
    margin-top: 10px;
    margin-left: 10px;
    font-weight: 500;
  }

  & > div:last-child {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 765px) {
    transform: translateY(50px);
  }
`;

const SearchInputForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    background-color: rgb(245, 246, 247);
    border-radius: 10px;
    flex: 1 1 auto;
    padding: 10px;
    display: flex;
    align-items: center;
  }

  div > :first-child {
    font-size: 18px;
    margin-left: 5px;
    color: rgb(204, 204, 204);
  }
  div > input {
    all: unset;
    width: 80%;
    margin-left: 10px;
  }

  @media (min-width: 765px) {
    display: none;
  }
`;

const search = () => {
  return (
    <>
      <DesktopHeader />
      <SearchWrapper>
        <SearchInputForm>
          <div>
            <BsSearch />
            <input type="text" placeholder="검색어를 입력하세요"></input>
          </div>
        </SearchInputForm>
        <h4>검색어 추천</h4>
        <div>
          <RecommendKeyword />
          <RecommendKeyword />
          <RecommendKeyword />
          <RecommendKeyword />
          <RecommendKeyword />
          <RecommendKeyword />
          <RecommendKeyword />
          <RecommendKeyword />
          <RecommendKeyword />
        </div>
      </SearchWrapper>
      <Footer />
    </>
  );
};

export default search;
