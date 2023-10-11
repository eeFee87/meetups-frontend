import MainPage from './pages/mainPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='/register'
          element={<RegisterPage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
