import React from 'react';

import { Container, Header } from './styles';

const Overview: React.FC = () => {
  return (
    <Container>
      <Header>
        <div className="title">
          <h4>Welcome to Real Time Chat</h4>
        </div>
      </Header>
    </Container>
  );
};

export default Overview;
