import { useMeetups } from '../hooks/useMeetups';
import { MeetupCard } from './MeetupCard';

function MeetupList() {
  const { meetups, loading } = useMeetups();

  return (
    <ul className='grid gap-4 pb-12  grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center 2xl:mx-44 xl:mx-30 lg:mx-20 md:mx-6 sm:mx-3 '>
      {meetups?.length > 0 &&
        meetups.map((meetup) => (
          <MeetupCard
            key={meetup.id}
            title={meetup.title}
            description={meetup.description}
            category={meetup.category}
            totalInscriptions={meetup.total_inscriptions}
            city={meetup.city}
            date={meetup.date}
          />
        ))}
    </ul>
  );
}

export default MeetupList;
