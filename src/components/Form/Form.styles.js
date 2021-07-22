import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background: transparent;
  padding: 0 40px;
`;

export const FormWrap = styled.form`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  input{
      border-radius:40px;
      height: 40px;
      font-size: 80%;
      text-align: center;
      background: #eee;
      margin-left: 20px;
      margin-right: 40px;
      margin-top: 23px;
      :focus {
        outline: none;
      }
  }

  h6{
    font-size: 50%;
    margin-bottom: 0px;
  }

  h5{
    font-size: 80%;
    margin-bottom: 0px;
  }

  .number{
    width: 60px;
    font-size: 90%;
    font-weight: 500;
    text-align: center;
  }

  button{
    border-radius:50%;
    margin-top: 25px;
    margin-left: 40px;
    height: 45px;
    width: 45px;
    font-weight: 700;
  }
`;

export const Space = styled.div`
    margin-bottom: 10px;
`;