import React from 'react';
import { BsSearch, BsBellFill } from 'react-icons/bs';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  right: 0;
  left: 0;
  background-color: white;
  border-bottom: 1px solid rgb(235, 235, 235);
  z-index: 9;
  @media (max-width: 765px) {
    display: none;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

  img {
    width: 100px;
    height: 50px;
    margin-right: 10px;
  }

  button {
    width: 80px;
    height: 45px;
    margin-right: 15px;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 5px;
  }
  button:first-of-type {
    background-color: white;
  }
  button:last-of-type {
    background-color: skyblue;
  }

  display: 'none';
`;

const SearchInput = styled.div`
  flex: 1 1 auto;
  margin: 10px 0 10px 10px;
  border: 1px solid rgb(235, 235, 235);
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 30px;

  & > :first-child {
    margin: 0 10px;
  }

  input {
    flex: 1 1 auto;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
  }
`;

const AlarmIcon = styled(BsBellFill)`
  font-size: 20px;
  margin: 0 30px;
`;

const DesktopHeader = () => {
  return (
    <Header>
      <HeaderInner>
        <img src="http://dhcdn.design.co.kr/cms/img/2014/06/M.1403075608.6054.3.jpg" />
        <SearchInput>
          <BsSearch />
          <input
            type="text"
            placeholder="찾고싶은 주제 혹은 닉네임을 입력하세요"
          />
        </SearchInput>
        <AlarmIcon />
        <button>로그인</button>
        <button>글쓰기</button>
      </HeaderInner>
    </Header>
  );
};

export default DesktopHeader;
