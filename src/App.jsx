import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import DetailMeetupPage from './pages/DetailMeetupPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

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
        <Route
          path='/meetup/:id'
          element={<DetailMeetupPage />}
        />
        <Route
          path='/*'
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
