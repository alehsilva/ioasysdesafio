import styled from 'styled-components';
import background from 'assets/background-books.png';

export const Container = styled.main`
  background-image: url(${background});
  background-size: cover;
  background-blend-mode: darken;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: initial;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 80%;
  max-width: 1130px;
  height: 40px;
  margin: 40px;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;

    svg {
      position: relative;
      top: 10px;
      margin-right: 16.6px;
    }
  }
`;

export const UserWelcome = styled.div`
  display: flex;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  h4 {
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }

  svg {
    position: relative;
    top: 10px;
    margin-left: 16px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 950px) {
    h4 {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1190px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const PaginationContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  height: 50px;
  max-width: 1000px;

  @media screen and (max-width: 950px) {
    justify-content: center;
  }
`;

export const CloseModal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 100%;
  z-index: 9999;
  margin: 30px;
  cursor: pointer;
  right: 0;
`;
