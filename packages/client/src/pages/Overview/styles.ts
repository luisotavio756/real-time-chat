import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Header = styled.header`
  flex: 1;
  height: 84px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
  }
`;
