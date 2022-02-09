import { listBooks } from 'constants/path';
import ListBooks from 'pages/ListBooks';
import Login from 'pages/Login';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <>
        <Route exact path="/" component={Login} />
        <Route path={listBooks} component={ListBooks} />
      </>
    </BrowserRouter>
  );
}
