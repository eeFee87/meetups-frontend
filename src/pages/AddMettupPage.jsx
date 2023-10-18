import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import AddMeetupForm from '../components/AddMeetupForm';

function AddMettupPage() {
  return (
    <div>
      <Header className='flex justify-between'>
        <NavLink
          to='/'
          className='flex items-center justify-center h-10 w-24 px-3 text-sm font-medium text-center text-white
            bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4
            focus:outline-none focus:ring-teal-300 dark:bg-teal-600
            dark:hover:bg-teal-700 dark:focus:ring-teal-800'
        >
          Volver
        </NavLink>
      </Header>
      <AddMeetupForm />
    </div>
  );
}

export default AddMettupPage;
