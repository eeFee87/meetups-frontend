import Header from '../components/Header';
import MeetupsList from '../components/MeetupList';

function MainPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header title='Meetup-App' />
      <MeetupsList className='flex-1' />
    </div>
  );
}

export default MainPage;
