import { AuthProvider } from 'context/Auth';
import Routes from 'routes/Routes';
import 'style.css';

function App(): JSX.Element {
  return (
    <main className="contentWrapper">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </main>
  );
}

export default App;
