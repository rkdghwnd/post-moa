import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { CgSmileNone } from 'react-icons/cg';
import Link from 'next/link';

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const LogInForm = styled.div`
  @media (min-width: 765px) {
    width: 500px;
    height: 400px;
    margin: 0 auto;
    transform: translateY(-30vh);
  }

  @keyframes slideUp {
    from {
      transform: translateY(1000%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slideDown {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(1000%);
    }
  }

  animation-name: ${props => (props.isOpenedComment ? 'slideUp' : 'slideDown')};
  animation-duration: 0.3s;
  animation-delay: 0s;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;

  & > h2 {
    text-align: center;
  }
  h4 {
    text-align: right;
    font-weight: 400;
    font-size: 15px;
    color: rgb(150, 150, 150);
    padding: 10px;
    margin-right: 50px;
  }
  a {
    text-decoration: none;
  }
`;

const CloseButton = styled(AiOutlineClose)`
  font-size: 20px;
  cursor: pointer;
`;

const OauthLogo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 70%;
  height: 30px;
  margin: 20px auto;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 5px 0;
`;

const LoginButton = styled.div`
  width: 50%;
  height: 45px;
  background-color: skyblue;
  color: white;
  border-radius: 25px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const LogInModal = () => {
  return (
    <ModalBackdrop>
      <LogInForm>
        <CloseButton />
        <h2>Login</h2>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        <LoginButton>로그인</LoginButton>

        <OauthLogo>
          <img src="https://cdn.imweb.me/upload/S20210304872ba49a108a8/89a68d1e3674a.png"></img>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
          <img src="https://clova-phinf.pstatic.net/MjAxODAzMjlfOTIg/MDAxNTIyMjg3MzM3OTAy.WkiZikYhauL1hnpLWmCUBJvKjr6xnkmzP99rZPFXVwgg.mNH66A47eL0Mf8G34mPlwBFKP0nZBf2ZJn5D4Rvs8Vwg.PNG/image.png"></img>
        </OauthLogo>
        <Link href="/signup">
          <a>
            <h4>회원가입</h4>
          </a>
        </Link>
      </LogInForm>
    </ModalBackdrop>
  );
};

export default LogInModal;
