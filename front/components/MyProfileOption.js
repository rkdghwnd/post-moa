import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MyProfileOptionForm = styled.div`
  @keyframes slideDown {
    from {
      transform: translateY(-20%);
    }
    to {
      transform: translateY(0);
    }
  }

  animation-name: ${props => (props.optionVisible ? 'slideDown' : '')};
  animation-duration: 0.3s;
  animation-delay: 0s;

  width: 150px;
  height: 100px;
  box-shadow: -2px 2px 8px hsl(0deg 0% 0% / 0.38);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45px;
  right: 5px;

  div {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    padding: 10px 20px;
  }
`;
const MyProfileOption = ({ optionVisible }) => {
  return (
    <MyProfileOptionForm optionVisible={optionVisible}>
      <div>프로필 수정</div>
      <div>로그아웃</div>
    </MyProfileOptionForm>
  );
};

MyProfileOption.propTypes = {
  optionVisible: PropTypes.bool.isRequired,
};

export default MyProfileOption;
