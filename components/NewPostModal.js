import React, { useCallback } from 'react';
import styled from 'styled-components';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { BsFillImageFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
const WritePostForm = styled.section`
  @keyframes slideUp {
    from {
      transform: translateY(1000%);
    }
    to {
      transform: translateY(0%);
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(1000%);
    }
  }

  animation-name: ${props => (props.newPostOpened ? 'slideUp' : 'slideDown')};
  animation-duration: 0.3s;
  animation-delay: 0s;

  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  & > div:last-child {
    padding: 20px;
    border-top: 1px solid rgb(235, 235, 235);
    font-size: 20px;
    height: 50px;
  }

  @media (min-width: 765px) {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    transform: translateY(50%);
  }
`;
const WritePostHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  & > :first-child {
    position: absolute;
    left: 10px;
    font-size: 23px;
    cursor: pointer;
  }
  span {
    font-size: 17px;
  }
  & > :last-child {
    position: absolute;
    right: 10px;
    font-size: 23px;
    cursor: pointer;
  }
`;
const WritePostTitle = styled.div`
  margin-top: 10px;
  padding: 20px;

  input {
    all: unset;
    width: 100%;
    height: 100%;
  }
  border-bottom: 1px solid rgb(235, 235, 235);
`;
const WritePostBody = styled.div`
  padding: 20px;
  flex: 1 1 auto;
  textarea {
    all: unset;
    width: 100%;
    height: 100%;
  }
`;
const NewPostModal = ({ newPostOpened, onClickNewPost }) => {
  const onStopEventBubbling = useCallback(e => {
    e.stopPropagation();
  }, []);
  return (
    <ModalBackdrop onClick={onClickNewPost}>
      <WritePostForm
        newPostOpened={newPostOpened}
        onClick={onStopEventBubbling}
      >
        <WritePostHeader>
          <AiOutlineClose onClick={onClickNewPost} />
          <span>글 작성</span>
          <AiOutlineCheck />
        </WritePostHeader>
        <WritePostTitle>
          <input type="text" placeholder="제목을 입력하세요"></input>
        </WritePostTitle>
        <WritePostBody>
          <textarea></textarea>
        </WritePostBody>
        <div>
          <BsFillImageFill />
        </div>
      </WritePostForm>
    </ModalBackdrop>
  );
};

NewPostModal.propTypes = {
  newPostOpened: PropTypes.bool.isRequired,
  onClickNewPost: PropTypes.func.isRequired,
};

export default NewPostModal;
