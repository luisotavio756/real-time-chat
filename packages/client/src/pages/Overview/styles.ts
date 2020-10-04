import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;

  flex-direction: column;
  padding: 0 12px;
`;

export const Header = styled.header`
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

export const MessagesContainer = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 32px auto;
  background: #232129;
  border-radius: 8px;
  padding: 0 24px;
`;

export const UsersInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 10px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: #ff9000;

    svg {
      margin-right: 4px;
    }
  }

  span {
    font-size: 12px;
    color: #999591;
  }
`;

export const Messages = styled.div`
  aside {
    & {
      margin-bottom: 8px;
    }

    &:last-of-type {
      margin-bottom: 68px;
    }

    padding: 16px 8px;
    border-radius: 16px;
    background: #423f4d;

    .name {
      font-weight: 500;
      font-size: 14px;
    }

    .text {
      color: #d4d4d4;
      font-size: 12px;
      font-weight: 300;
    }
  }
`;

export const InputContainer = styled.div`
  max-width: 750px;
  width: calc(100% - 24px);
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 8px 16px;
  background: #232129;
  border-radius: 16px;
  box-shadow: 1px 1px 8px #555;

  display: flex;
  align-items: center;
  justify-content: space-between;

  textarea {
    font-size: 14px;
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: none;
    &::placeholder {
      color: #666360;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    width: 42px;
    color: #fff;
    background: #ff9000;
    border: none;
    font-size: 28px;
    border-radius: 50%;
    margin-left: 8px;
  }
`;
