import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Form = styled.div`
  width: 55%;
  margin: 10px 30% 10px 25%;
  padding: 10px 0;
  border: 1px solid #4180c5;
  border-radius: 10px;
  form {
    width: 70%;
    margin: 4% 15%;
  }
  textarea,
  input[type='date'],
  input[type='tel'],
  input[type='email'],
  input[type='text'] {
    margin-bottom: 20px;
    margin-top: 10px;
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #4180c5;
  }
  input[type='submit'] {
    margin-bottom: 20px;
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #4180c5;
    background-color: #4180c5;
    color: aliceblue;
    font-size: 15px;
    cursor: pointer;
  }

  ${MEDIA.PHONE`
      width: 70%;
      margin: 10px 50% 10px 15%;
      border: none;
  `};

  ${MEDIA.TABLET`
      width: 70%;
      margin: 10px 50% 10px 15%;
      border: none;
  `};
`;
