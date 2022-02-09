import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 769px;
  min-width: 400px;
  width: 60%;
  height: 608px;
  background: #ffffff;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Book = styled.div`
  margin-left: 10px;
  width: 50%;

  img {
    width: 90%;
    height: 490px;
    left: 131px;
    top: 139px;

    filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
  }
`;

export const Info = styled.div`
  position: relative;
  margin-left: 10px;
  width: 30%;
  height: 500px;
  overflow-y: hidden;
  top: -20px;
  h1 {
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
  }

  h2 {
    position: relative;
    top: -25px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #ab2680;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
  }

  h4 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    p {
      margin: 0;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      text-align: right;
      color: #999999;
    }
  }

  span {
    p {
      margin: 0px;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      text-align: justify;
      color: #999999;
    }
  }
`;
