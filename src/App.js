import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthLoginProvider } from './Contexts/AuthLogin';
import Routes from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <AuthLoginProvider>
        <Routes />
      </AuthLoginProvider>
    </BrowserRouter>
  );
}

export default App;
  