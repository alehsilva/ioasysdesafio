import styled from 'styled-components';
import Background from '../../assets/background.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${Background}) no-repeat center;
  background-size: cover;
`;

export const WrapperLogin = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 368px;
  height: 224px;
  left: 115px;
  top: 300px;
  transition: 0.3s ease-out;

  span {
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
    color: #ffffff;
    margin-bottom: 50px;

    svg {
      position: relative;
      top: 8px;
      margin-right: 16px;
    }
  }

  @media screen and (max-width: 950px) {
    margin: 0 auto;
    position: relative;
    left: -15px;
    top: 300px;
    width: 288px;
    height: 224px;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  margin-top: 5px;
  background: rgba(0, 0, 0, 0.32);
  border: 0;
  border-radius: 4px;

  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  padding: 16px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const Label = styled.label`
  color: #fff;
  opacity: 0.5;
  font-size: 12px;
  line-height: 16px;
  position: relative;
  left: 16px;
  top: 28px;
  transition: 0.2s ease all;
`;

export const Button = styled.button`
  position: relative;
  width: 85px;
  height: 36px;
  left: 290px;
  top: -55px;

  border: 0;
  cursor: pointer;

  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #b22e6f;

  background: #ffffff;
  border-radius: 44px;

  &:hover {
    filter: brightness(0.9);
  }

  @media screen and (max-width: 950px) {
    left: 210px;
  }
`;
