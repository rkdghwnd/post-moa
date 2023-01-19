import React from 'react';
import styled from 'styled-components';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const RecommendedKeyWordForm = styled.div`
  display: flex;
  margin: 5px;
  button {
    all: unset;
    padding: 10px;
    border: 1px solid rgb(217, 217, 217);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button > :first-child {
    font-size: 20px;
    color: rgb(217, 217, 217);
  }
  button > span {
    margin-left: 10px;
  }
`;

const RecommendKeyword = () => {
  return (
    <RecommendedKeyWordForm>
      <button>
        <BsFillArrowUpRightCircleFill />
        <span>자율주행</span>
      </button>
    </RecommendedKeyWordForm>
  );
};

export default RecommendKeyword;
