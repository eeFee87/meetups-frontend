import PropTypes from 'prop-types';
import meetupLogo from '../assets/meetup-logo-2.png';
import avatarDefault from '../assets/avatar-default.png';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
// const backendUrl = import.meta.env.VITE_API_URL;

function Header({ children }) {
  const { authUser } = useAuth();

  return (
    <header className='flex  justify-around py-4 items-center'>
      <NavLink to='/'>
        <img
          className='w-48'
          src={meetupLogo}
          alt='meetup-logo'
        />
      </NavLink>
      {authUser && (
        <div className='flex items-center gap-4'>
          <img
            className='opacity-80'
            width={40}
            // src={`${backendUrl}/docs/images/${authUser.avatar}`}
            src={avatarDefault}
            alt='avatar image'
          />
          <p className='text-2xl font-semibold'> {authUser.name}</p>
        </div>
      )}

      <div className='flex  gap-6 items-center'>{children}</div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  children: PropTypes.node
};
