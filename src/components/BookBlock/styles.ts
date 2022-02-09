import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-self: center;
  align-items: center;
  width: 272px;
  height: 150px;

  margin-right: 16px;
  margin-bottom: 16px;

  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  &:hover {
    filter: brightness(0.9);
  }

  @media screen and (max-width: 950px) {
    margin: 16px auto;
    width: 288px;
    height: 160px;
  }
`;

export const Book = styled.div`
  margin: 10px;

  img {
    margin-left: 10px;
    width: 81px;
    height: 122px;
    left: 131px;
    top: 139px;

    filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
  }
`;

export const Info = styled.div`
  position: relative;
  height: 130px;
  overflow-y: hidden;
  top: -8px;
  h1 {
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }

  h2 {
    position: relative;
    top: -10px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #ab2680;
  }

  span {
    p {
      margin: 0px;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      color: #999999;
    }
  }
`;
