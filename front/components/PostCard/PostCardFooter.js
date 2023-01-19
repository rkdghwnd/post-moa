import React from 'react';
import styled from 'styled-components';
import { FaSmile, FaCommentDots } from 'react-icons/fa';
import { BsFillBookmarkFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const FooterForm = styled.li`
  margin-top: 5px;
  button {
    all: unset;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 4px;
    padding: 1px 6px 4px 6px;
  }
  button > :first-child {
    vertical-align: middle;
    color: rgb(217, 217, 217);
  }
  button:nth-child(2) {
    margin-left: 10px;
  }
  button:last-child {
    width: 25px;
    float: right;
  }
  button:last-child > div {  
    text-align:center ;
  }
  button:last-child::after {
    content: ''
    clear: both;
  }
  span {
    margin-left: 5px;
    font-size: 13px;
  }
`;
const BsFillBookmarkIcon = styled(BsFillBookmarkFill)`
  vertical-align: middle;
`;

const PostCardFooter = ({ onClickComment }) => {
  return (
    <FooterForm>
      <button>
        <FaSmile />
        <span>1</span>
      </button>
      <button onClick={onClickComment}>
        <FaCommentDots />
        <span>1</span>
      </button>
      <button>
        <div>
          <BsFillBookmarkIcon />
        </div>
      </button>
    </FooterForm>
  );
};

PostCardFooter.propTypes = {
  onClickComment: PropTypes.func.isRequired,
};

export default PostCardFooter;
