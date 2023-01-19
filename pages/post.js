import React from 'react';
import styled from 'styled-components';
import PostHeader from '../components/Post/PostHeader';
import PostMainText from '../components/Post/PostMainText';
import PostFooter from '../components/Post/PostFooter';
import PostCommentInput from '../components/Post/PostCommentInput';
import Comment from '../components/Post/Comment';
const PostForm = styled.section`
  padding: 20px 20px 0 20px;
  background-color: white;
  max-width: 1200px;
`;

const post = () => {
  return (
    <PostForm>
      <PostHeader />
      <PostMainText />
      <PostFooter />
      <Comment />
      <Comment />
      <div style={{ height: '100px' }}></div>
      <PostCommentInput />
    </PostForm>
  );
};

export default post;
