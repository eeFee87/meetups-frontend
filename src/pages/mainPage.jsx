import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import MeetupsList from '../components/MeetupList';

function MainPage() {
  const navigate = useNavigate();
  return (
    <main className='flex flex-col min-h-screen gap-20'>
      <Header title='Meetup-App'>
        <button
          onClick={() => navigate('/login')}
          className='h-10 px-3  text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
        >
          Iniciar sesión
        </button>
        <button
          onClick={() => navigate('/register')}
          className='h-10 px-3  text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
        >
          Registro
        </button>
      </Header>
      <MeetupsList className='flex-1' />
    </main>
  );
}

export default MainPage;
