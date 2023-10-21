import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import checkListIcon from '../assets/checklist-icon.png';
import cityIcon from '../assets/city-icon.png';
import calendarIcon from '../assets/calendar-icon.png';
const backendUrl = import.meta.env.VITE_API_URL;
export const MeetupCard = ({
  id,
  title,
  description,
  category,
  totalInscriptions,
  photo,
  city,
  date
}) => {
  const navigate = useNavigate();
  return (
    <li
      className='max-h-sm max-w-sm w-full  bg-white border border-gray-200 rounded-lg shadow drop-shadow-lg'
      key={id}
    >
      <img
        className='rounded-t-lg w-full h-60 object-cover'
        src={`${backendUrl}/${photo}`}
        alt='image meetup'
      />

      <div className='p-5 h-80 flex flex-col'>
        <h5 className='mb-2 pt-6 h-full text-3xl font-bold tracking-tight text-gray-900 drop-shadow-lg'>
          {title}.
        </h5>
        <div className='flex justify-center pb-3'>
          <p className='mb-3 font-semibold text-gray-700 '>
            <span className='text-teal-600 text-lg'> Temática: </span>
            <span className='font-semibold'>{category}</span>
          </p>
        </div>

        <div className='flex justify-between'>
          <div className='flex items-center gap-2 pb-8'>
            <img
              className='w-8 h-8 opacity-70'
              src={cityIcon}
              alt='city icon'
            />
            <p className='font-semibold text-lg'>{city}</p>
          </div>
          <div className='flex items-center gap-2 pb-8'>
            <img
              className='w-8 h-8 opacity-70'
              src={calendarIcon}
              alt='city icon'
            />
            <p className='font-semibold text-lg'>
              {new Date(date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <img
              className='w-8 h-8 opacity-70'
              src={checkListIcon}
              alt='checklist icon'
            />
            <p className='font-semibold text-md'>
              {totalInscriptions} inscritos
            </p>
          </div>
          <button
            type='button'
            onClick={() => {
              navigate(`/meetup/${id}`);
            }}
            className=' max-w-[120px] justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 '
          >
            Ver detalle
          </button>
        </div>
      </div>
    </li>
  );
};

MeetupCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  category: PropTypes.string.isRequired,
  totalInscriptions: PropTypes.number.isRequired,
  photo: PropTypes.string,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};
