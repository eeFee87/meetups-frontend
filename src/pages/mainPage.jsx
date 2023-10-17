// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/Header';
import MeetupsList from '../components/MeetupList';
import { Hero } from '../components/Hero';

function MainPage() {
  const { authUser, authLogout } = useAuth();

  return (
    <div className='flex flex-col min-h-screen gap-20'>
      <Header title='Meetup-App'>
        {!authUser && (
          <div className='flex gap-6 '>
            <NavLink
              to='/login'
              className='flex justify-center items-center h-10 px-3 text-sm font-medium text-center text-white
            bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4
            focus:outline-none focus:ring-teal-300 dark:bg-teal-600
            dark:hover:bg-teal-700 dark:focus:ring-teal-800'
            >
              Iniciar sesión
            </NavLink>

            <NavLink
              to='/register'
              className='flex items-center h-10 px-3 text-sm font-medium text-center text-white
            bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4
            focus:outline-none focus:ring-teal-300 dark:bg-teal-600
            dark:hover:bg-teal-700 dark:focus:ring-teal-800'
            >
              Registrarse
            </NavLink>
          </div>
        )}
        {authUser && (
          <button
            onClick={() => authLogout()}
            className='h-10 w-20 px-3  text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
          >
            LogOut
          </button>
        )}
      </Header>
      <Hero />
      <MeetupsList className='flex-1' />
    </div>
  );
}

export default MainPage;
