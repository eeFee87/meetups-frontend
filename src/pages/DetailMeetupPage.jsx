import { useParams, NavLink } from 'react-router-dom';
import { useMeetup } from '../hooks/useMeetup';

import Header from '../components/Header';

import MeetupDetail from '../components/MeetupDetail';
const DetailMeetupPage = () => {
  const { id } = useParams();
  const { meetup, loading } = useMeetup(id);

  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div className='mx-60 sm:mx-20 xs:mx-2'>
      {meetup && (
        <div>
          <Header>
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
          <MeetupDetail meetup={meetup} />
        </div>
      )}
    </div>
  );
};
export default DetailMeetupPage;
