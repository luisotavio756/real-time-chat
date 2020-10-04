import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FiUsers } from 'react-icons/fi';
import { MdSend } from 'react-icons/md';
import socketio from 'socket.io-client';
import api from '../../services/api';
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

  const inputRefMessage = useRef<HTMLTextAreaElement>(null);

  const socket = useMemo(() => {
    return socketio('http://localhost:3333');
  }, []);

  const fakeNameUsers = useMemo(() => {
    return [
      'Panda Branco',
      'Macaco Preto',
      'Cachorro Marrom',
      'Gato Rosa',
      'Papagaio Roxo',
      'Cavalo Branco',
      'Arara Verde',
    ];
  }, []);

  const handleSubmitMessage = useCallback(() => {
    if (!inputRefMessage.current?.value) {
      alert('Por favor, digite uma mensagem');
      return;
    }

    try {
      api.post('/messages', {
        name: fakeNameUsers[Math.floor(Math.random() * 6)],
        text: inputRefMessage.current?.value,
      });

      inputRefMessage.current.value = '';
    } catch (error) {
      alert('Ocorreu algum erro');
    }
  }, []);

  useEffect(() => {
    api.get('/messages').then(response => {
      setMessages(response.data);
    });
  });

  useEffect(() => {
    socket.on('user-connected', (_data: any) => {
      setUsers(state => state + 1);
    });

    socket.on('user-disconnected', (_data: any) => {
      setUsers(state => (state > 1 ? state - 1 : 1));
    });

    socket.on('new-message', (data: IMessage) => {
      setMessages(state => [...state, data]);
    });
  }, []);

  return (
    <>
      <Header>
        <div className="title">
          <h4>Welcome to Real Time Chat</h4>
        </div>
      </Header>
      <Container>
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
          <textarea ref={inputRefMessage} placeholder="Digite sua mensagem" />
          <button type="button" onClick={handleSubmitMessage}>
            <MdSend />
          </button>
        </InputContainer>
      </Container>
    </>
  );
};

export default Overview;
