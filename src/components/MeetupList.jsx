import { useMeetups } from '../hooks/useMeetups';
import { MeetupCard } from './MeetupCard';

function MeetupList() {
  const { meetups, loading } = useMeetups();

  return (
    <ul className='grid gap-4  grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center 2xl:mx-44 xl:mx-30 lg:mx-20 md:mx-6 sm:mx-3 '>
      {meetups?.length > 0 &&
        meetups.map((meetup) => (
          <MeetupCard
            key={meetup.id}
            title={meetup.title}
            description={meetup.description}
            totalInscriptions={meetup.total_inscriptions}
          />
        ))}
    </ul>
  );
}

export default MeetupList;
