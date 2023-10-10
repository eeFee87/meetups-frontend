import MainPage from './pages/mainPage.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<MainPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
