import { useState } from 'react';
import { useMeetups } from '../hooks/useMeetups';
import { FilterMenu } from './FilterMenu';
import { MeetupCard } from './MeetupCard';

function MeetupList() {
  const { meetups, loading } = useMeetups();
  const [selectFilterCategories, setSelectFilterCategories] = useState();
  const [selectFilterCities, setSelectFilterCities] = useState();
  const filterMeetups = meetups?.filter((meetup) => {
    const categoryFilter =
      !selectFilterCategories || meetup.category === selectFilterCategories;

    const cityFilter =
      !selectFilterCities || meetup.city === selectFilterCities;

    return categoryFilter && cityFilter;
  });
  return (
    <div>
      <FilterMenu
        setSelectFilterCategories={setSelectFilterCategories}
        setSelectFilterCities={setSelectFilterCities}
        selectFilterCategories={selectFilterCategories}
        selectFilterCities={selectFilterCities}
      />
      {loading && <p className='text-center text-2xl font-bold'>Cargando...</p>}
      <ul className='grid gap-4 pb-12  grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center 2xl:mx-44 xl:mx-30 lg:mx-20 md:mx-6 sm:mx-3 '>
        {filterMeetups?.length > 0 &&
          filterMeetups.map((meetup) => (
            <MeetupCard
              id={meetup.id}
              key={meetup.id}
              title={meetup.title}
              description={meetup.description}
              category={meetup.category}
              totalInscriptions={meetup.total_inscriptions}
              photo={meetup.photo}
              city={meetup.city}
              date={meetup.date}
            />
          ))}
      </ul>
    </div>
  );
}

export default MeetupList;
