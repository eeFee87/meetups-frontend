import { useParams } from 'react-router-dom';
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
          <Header />
          <MeetupDetail meetup={meetup} />
        </div>
      )}
    </div>
  );
};
export default DetailMeetupPage;
