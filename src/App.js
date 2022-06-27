import { BrowserRouter } from 'react-router-dom';
import { AuthLoginProvider } from './Contexts/AuthLogin';
import { StockProvider } from './Contexts/StockFunctions';
import Routes from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <AuthLoginProvider>
        <StockProvider>
          <Routes />
        </StockProvider>
      </AuthLoginProvider>
    </BrowserRouter>
  );
}

export default App;
  