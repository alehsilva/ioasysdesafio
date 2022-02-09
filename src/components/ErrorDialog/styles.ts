import styled from 'styled-components';

export const BalaoErro = styled.div`
  width: 239px;
  height: 48px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);

  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;

  &::before {
    border: 10px solid transparent;
    border-bottom-color: rgba(255, 255, 255, 0.4);
    content: '';
    top: -20px;
    left: 15px;
    position: absolute;
  }
`;
