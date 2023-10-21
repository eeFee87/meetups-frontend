import PropTypes from 'prop-types';
import { useState } from 'react';
import clockIcon from '../assets/clock-icon.png';
import calendarIcon from '../assets/calendar-icon.png';
import { useAuth } from '../hooks/useAuth';
import {
  deleteInscribeMeetupService,
  inscribeMeetupService
} from '../services/meetups';
const backendUrl = import.meta.env.VITE_API_URL;

function MeetupDetail({ meetup }) {
  const { authUser } = useAuth();

  const allInscriptionsIds = meetup.inscriptions.map(
    (inscription) => inscription.id_user
  );

  const [isInscribed, setIsInscribed] = useState(
    allInscriptionsIds.some((item) => item === authUser?.id)
  );
  const [inscriptionsNames, setInscriptionsNames] = useState(
    meetup.inscriptions.map((item) => item.name)
  );

  const actualizarEstado = (userActual, accion) => {
    setInscriptionsNames(() => {
      if (accion === 'delete') {
        return inscriptionsNames.filter((item) => item !== userActual);
      } else {
        const newinscriptionsNames = [...inscriptionsNames, userActual];
        return newinscriptionsNames;
      }
    });
  };

  return (
    <main>
      <h1 className='text-center text-6xl font-bold drop-shadow-sm py-14'>
        {meetup.title}
      </h1>
      <div className='flex flex-col justify-evenly items-center gap-8 py-16 sm:flex-row xl:mx-44'>
        <img
          className='drop-shadow-lg w-[600px] h-[400px] object-cover rounded-lg'
          src={`${backendUrl}/${meetup.photo}`}
          alt='meetup image'
        />

        <p className='text-2xl  text-center sm:text-left font-semibold'>
          {meetup.description}
        </p>
      </div>
      {authUser && (
        <div className='flex justify-center'>
          {isInscribed ? (
            <button
              onClick={() => {
                deleteInscribeMeetupService(meetup.id);
                setIsInscribed(false);
                actualizarEstado(authUser.name, 'delete');
              }}
              className='flex justify-center items-center h-16 w-36 px-3 text-lg font-medium text-center text-white
        bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4
            focus:outline-none focus:ring-teal-300 dark:bg-teal-600
            dark:hover:bg-teal-700 dark:focus:ring-teal-800'
            >
              Borrar inscripcion
            </button>
          ) : (
            <button
              onClick={() => {
                inscribeMeetupService(meetup.id);
                setIsInscribed(true);
                actualizarEstado(authUser.name, 'insert');
              }}
              className='flex justify-center items-center h-16 w-36 px-3 text-lg font-medium text-center text-white
        bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4
            focus:outline-none focus:ring-teal-300 dark:bg-teal-600
            dark:hover:bg-teal-700 dark:focus:ring-teal-800'
            >
              Inscribirse
            </button>
          )}
        </div>
      )}

      <div className='flex flex-col justify-between md:flex-row gap-8 p-8 2xl:mx-60 xl:mx-44'>
        <div className='flex flex-col gap-2'>
          <div className='flex  items-center gap-4'>
            <img
              className='opacity-90'
              width={35}
              src={calendarIcon}
              alt='calendar icon'
            />
            <p className='text-xl font-semibold '>
              {new Date(meetup.date).toLocaleDateString()}
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <img
              className='opacity-90'
              width={35}
              src={clockIcon}
              alt='clock icon'
            />
            <p className='text-xl font-semibold'>
              {new Date(meetup.date).toLocaleTimeString()}
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <p className='flex flex-col text-xl  text-teal-600 font-bold drop-shadow-md '>
            Temática
          </p>

          <p className='text-xl font-semibold'> {meetup.category}</p>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <p className='flex flex-col text-xl  text-teal-600 font-bold drop-shadow-md '>
            Lugar
          </p>

          <p className='text-xl font-semibold'> {meetup.city}</p>
        </div>
        <div
          className={
            authUser
              ? 'hidden'
              : 'text-xl font-semibold flex flex-col items-center'
          }
        >
          <p className='text-teal-600 font-bold drop-shadow-md'>
            Personas Inscritas:
          </p>
          {meetup.total_inscriptions}
        </div>

        {authUser && (
          <div className='flex flex-col items-center'>
            <p className='text-xl font-bold text-teal-600 drop-shadow-md'>
              Lista de personas inscritas:{'  '}
            </p>
            <ul className='flex gap-3 '>
              {inscriptionsNames?.length > 0 ? (
                inscriptionsNames.map((inscription, index) => (
                  <li
                    key={index}
                    className='text-xl font-semibold'
                  >
                    {inscription}
                  </li>
                ))
              ) : (
                <p className='text-xl font-semibold'>
                  No hay usuarios inscritos a esta meetup
                </p>
              )}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default MeetupDetail;

MeetupDetail.propTypes = {
  id: PropTypes.number,
  meetup: PropTypes.object.isRequired
};
