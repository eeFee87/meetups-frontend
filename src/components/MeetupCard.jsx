import PropTypes from 'prop-types';
import checkListIcon from '../assets/checklist.png';
export const MeetupCard = ({ id, title, description, totalInscriptions }) => {
  return (
    <li
      className='max-h-sm max-w-sm  bg-white border border-gray-200 rounded-lg shadow drop-shadow-lg'
      key={id}
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
          {title}
        </h5>

        <p className='py-5 mb-3 font-normal text-gray-700 dark:text-gray-400 h-full'>
          {description}
        </p>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <img
              className='w-8 h-8 opacity-70'
              src={checkListIcon}
              alt='checklist icon'
            />
            <p>{totalInscriptions} inscritos</p>
          </div>
          <button
            type='button'
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
  title: PropTypes.string,
  description: PropTypes.string,
  totalInscriptions: PropTypes.number
};
