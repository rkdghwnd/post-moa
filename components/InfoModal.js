import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BsGithub } from 'react-icons/bs';

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const InfoForm = styled.div`
  @keyframes slideUp {
    from {
      transform: translateY(1000%);
    }
    to {
      transform: translateY(200px);
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(200px);
    }
    to {
      transform: translateY(1000%);
    }
  }

  animation-name: ${props => (props.infoOpened ? 'slideUp' : 'slideDown')};
  animation-duration: 0.3s;
  animation-delay: 0s;

  transform: translateY(200px);
  margin: 0 auto;
  width: 500px;
  height: 100px;
  font-weight: 700;
  text-align: left;
  border-radius: 5px;
  background-color: white;
  margin: 0 auto;
  color: black;

  h4 {
    padding: 20px;
    text-align: center;
  }
  div {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const InfoModal = ({ onClickAppInfo, infoOpened }) => {
  const onStopEventBubbling = useCallback(e => {
    e.stopPropagation();
  }, []);

  return (
    <ModalBackdrop onClick={onClickAppInfo}>
      <InfoForm onClick={onStopEventBubbling} infoOpened={infoOpened}>
        <h4>Copyright 2023 Postmoa.com All Right Reserved.</h4>
        <div>
          <a
            href="https://github.com/rkdghwnd"
            target="_blank"
            rel="noreferrer noopener"
          >
            GITHUB <BsGithub />
          </a>
        </div>
      </InfoForm>
    </ModalBackdrop>
  );
};

InfoModal.propTypes = {
  onClickAppInfo: PropTypes.func.isRequired,
  infoOpened: PropTypes.bool.isRequired,
};

export default InfoModal;
