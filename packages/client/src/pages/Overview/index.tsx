import React, { useEffect, useMemo, useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import { MdSend } from 'react-icons/md';
import socketio from 'socket.io-client';
import {
  Container,
  Header,
  MessagesContainer,
  UsersInfo,
  Messages,
  InputContainer,
} from './styles';

interface IMessage {
  _id: string;
  name: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

const Overview: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [users, setUsers] = useState(0);

  const socket = useMemo(() => {
    return socketio('http://localhost:3333');
  }, []);

  useEffect(() => {
    socket.on('user-connected', (_data: any) => {
      setUsers(state => state + 1);
    });

    socket.on('user-disconnected', (_data: any) => {
      setUsers(state => state - 1);
    });

    socket.on('new-message', (data: IMessage) => {
      setMessages(state => [...state, data]);
    });
  }, []);
  return (
    <Container>
      <Header>
        <div className="title">
          <h4>Welcome to Real Time Chat</h4>
        </div>
      </Header>
      <MessagesContainer>
        <UsersInfo>
          <p>
            <FiUsers />
            {users}
          </p>
          <span>usuários online</span>
        </UsersInfo>
        <Messages>
          {messages.map(({ _id: id, ...message }: IMessage) => (
            <aside key={id}>
              <div className="name">{message.name}</div>
              <div className="text">{message.text}</div>
            </aside>
          ))}
        </Messages>
      </MessagesContainer>
      <InputContainer>
        <textarea placeholder="Digite sua mensagem" />
        <button type="button">
          <MdSend />
        </button>
      </InputContainer>
    </Container>
  );
};

export default Overview;
