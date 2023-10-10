import PropTypes from 'prop-types';

function Header({ title, children }) {
  return (
    <div>
      <h1 className='underline text-5xl text-center'>{title}</h1>
      <div>{children}</div>
    </div>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};
