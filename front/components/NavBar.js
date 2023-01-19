import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: white;
  margin: 0 auto 10px auto;
  border-bottom: 1px solid rgb(240, 240, 240);
  ul {
    display: flex;
  }
  ul > li {
    list-style-type: none;
    margin: 15px;
    padding: 5px;
    font-size: 18px;
  }
  ul > li > a {
    color: #bfbfbf;
    text-decoration: none;
    font-weight: bold;
  }
  @media (min-width: 765px) {
    position: static;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link href="/">
            <a>핫이슈</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>뉴스</a>
          </Link>
        </li>
        <li>
          <Link href="/free">
            <a>자유</a>
          </Link>
        </li>
        <li>
          <Link href="/hotdeal">핫딜</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
