import React from 'react';
import styled from 'styled-components';

const EditForm = styled.form`
  text-align: center;
  input {
    all: unset;
    width: 100%;
    height: 40px;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 5px;
  }
  textarea {
    all: unset;
    width: 100%;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 5px;
  }
`;

const InputLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileEditForm = () => {
  return (
    <EditForm>
      <InputLabel>
        <label htmlFor="nickname">닉네임</label>
        <span>2/10</span>
      </InputLabel>
      <br />
      <input name="nickname" type="text"></input>
      <br />
      <br />
      <InputLabel>
        <label htmlFor="nickname">소개</label>
        <span>2/10</span>
      </InputLabel>
      <br />
      <textarea rows="6" name="nickname" type="text"></textarea>
      <br />
      <br />
      <InputLabel>
        <label htmlFor="nickname">비밀번호</label>
      </InputLabel>
      <br />
      <input name="nickname" type="text"></input>
      <br />
      <br />
      <InputLabel>
        <label htmlFor="nickname">비밀번호 확인</label>
      </InputLabel>
      <br />
      <input name="nickname" type="text"></input>
    </EditForm>
  );
};

export default ProfileEditForm;
