import PropTypes from 'prop-types';
import meetupLogo from '../assets/meetup-logo-2.png';
import { NavLink } from 'react-router-dom';

function Header({ children }) {
  return (
    <div className='flex  justify-around py-4'>
      <NavLink to='/'>
        <img
          className='w-48'
          src={meetupLogo}
          alt='meetup-logo'
        />
      </NavLink>
      <div className='flex  gap-6 items-center'>{children}</div>
    </div>
  );
}

export default Header;

Header.propTypes = {
  children: PropTypes.node
};
