/* eslint-disable @typescript-eslint/no-unused-vars */
import Logo from 'assets/Logo';
import ErrorDialog from 'components/ErrorDialog';
import { AuthContext } from 'context/Auth';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { api } from 'services/api';
import {
  Button,
  Container,
  FormLogin,
  Input,
  Label,
  WrapperLogin
} from './styles';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [email, password]);

  const { setUser } = useContext(AuthContext);

  const history = useHistory();

  function onAuthenticate(event: any): void {
    event.preventDefault();
    signIn();
  }

  async function signIn(): Promise<void> {
    const response = await api
      .post('/auth/sign-in', {
        email,
        password
      })
      .catch((erro) => setError(erro?.response?.data?.errors?.message));

    if (response?.status === 200) {
      const usuario = response?.data;
      const auth = response?.headers['authorization'];

      localStorage.setItem('aut.user', auth);
      api.defaults.headers.common.authorization = `Bearer ${auth}`;

      setUser(usuario);
      history.push('/books');
    }
  }

  function handleFormInput(event: React.ChangeEvent<HTMLInputElement>): void {
    event.target.name === 'email'
      ? setEmail(event.target.value)
      : setPassword(event.target.value);
  }
  return (
    <Container>
      <WrapperLogin>
        <span>
          <Logo fill="white" width="105" height="36" />
          Books
        </span>
        <FormLogin onSubmit={onAuthenticate}>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            onChange={handleFormInput}
            autoComplete="off"
          />
          <Label>Senha</Label>
          <Input type="password" name="password" onChange={handleFormInput} />
          <Button>Entrar</Button>
          {error && <ErrorDialog erro={error} />}
        </FormLogin>
      </WrapperLogin>
    </Container>
  );
}
