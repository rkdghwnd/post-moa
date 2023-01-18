import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import Comment from './Post/Comment';
const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const CommentForm = styled.div`
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

  border-radius: 5px;
  background-color: white;
  padding: 20px;

  & > div {
    position: relative;
    margin-bottom: 10px;
  }
  & > div > h4 {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
  }
`;

const CloseButton = styled(AiOutlineClose)`
  font-size: 20px;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
`;

const CommentModal = ({ onClickComment, isOpenedComment }) => {
  const onStopEventBubbling = useCallback(e => {
    e.stopPropagation();
  }, []);

  return (
    <ModalBackdrop onClick={onClickComment}>
      <CommentForm
        onClick={onStopEventBubbling}
        isOpenedComment={isOpenedComment}
      >
        <div>
          <h4>댓글 0</h4>
          <CloseButton />
        </div>
        <Comment />
        <Comment />
      </CommentForm>
    </ModalBackdrop>
  );
};

CommentModal.propTypes = {
  onClickComment: PropTypes.func.isRequired,
  isOpenedComment: PropTypes.bool.isRequired,
};

export default CommentModal;
