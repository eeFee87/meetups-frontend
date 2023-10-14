import { useEffect, useState } from 'react';
import { getMeetups } from '../services/meetups';
import checkListIcon from '../assets/checklist.png';

function MeetupList() {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    async function fetchMeetups() {
      const data = await getMeetups();
      setMeetups(data.meetups);
    }
    fetchMeetups();
  }, []);

  return (
    <ul className='grid gap-4  grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center 2xl:mx-44 xl:mx-30 lg:mx-20 md:mx-6 sm:mx-3 '>
      {meetups.map((meetup) => (
        <li
          className='max-h-sm max-w-sm  bg-white border border-gray-200 rounded-lg shadow'
          key={meetup.id}
        >
          <a href='#'>
            <img
              className='rounded-t-lg'
              src='/docs/images/blog/image-1.jpg'
              alt=''
            />
          </a>
          <div className='p-5 h-80 flex flex-col'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
              {meetup.title}
            </h5>

            <p className='py-5 mb-3 font-normal text-gray-700 dark:text-gray-400 h-full'>
              {meetup.description}
            </p>
            <div className='flex justify-between'>
              <button className='inline-flex max-w-[120px] justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'>
                Ver detalle
              </button>
              <div className='flex items-center gap-2'>
                <img
                  className='w-8 h-8 opacity-70'
                  src={checkListIcon}
                  alt='checklist icon'
                />
                <p>{meetup.total_inscriptions} inscritos</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MeetupList;
