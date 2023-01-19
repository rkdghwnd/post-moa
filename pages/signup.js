import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import DesktopHeader from '../components/DesktopHeader';

const SignUpForm = styled.section`
  width: 100%;
  height: 94vh;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  & > h2 {
    text-align: center;
  }
  @media (min-width: 765px) {
    max-width: 600px;
    height: 100%;
    margin: 0 auto;
    transform: translateY(80px);
  }
`;

const BackButton = styled(AiOutlineArrowLeft)`
  position: absolute;
  font-size: 20px;
  cursor: pointer;
  top: 25px;
  left: 30px;
`;

const Input = styled.input`
  width: 70%;
  height: 30px;
  margin: 20px auto 10px auto;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 5px 0;
`;

const SignUpButton = styled.div`
  width: 50%;
  height: 45px;
  background-color: skyblue;
  color: white;
  border-radius: 25px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;

const signup = () => {
  return (
    <>
      <DesktopHeader />
      <SignUpForm>
        <h2>Sign up</h2>
        <BackButton />
        <Input type="text" placeholder="아이디" />
        <Input type="text" placeholder="닉네임" />
        <Input type="password" placeholder="비밀번호" />
        <Input type="password" placeholder="비밀번호 확인" />
        <SignUpButton>회원가입</SignUpButton>
      </SignUpForm>
    </>
  );
};

export default signup;
