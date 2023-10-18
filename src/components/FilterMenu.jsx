import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const FilterMenu = () => {
  const { authUser } = useAuth();
  return (
    <div className=' flex flex-col items-center md:flex-row  mb-6 md:justify-around gap-4'>
      <div className='flex flex-col sm:flex-row gap-4 '>
        <select
          id='categories'
          className=' w-60 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-teal-500 focus:border-teal-500 block  p-2.5 '
        >
          <option defaultValue>Filtrar por temática</option>
          <option value='Fotografia'>Fotografía</option>
          <option value='Ciencia'>Ciencia</option>
          <option value='Tecnologia'>Tecnología</option>
          <option value='Gastronomia'>Gastronomía</option>
          <option value='Naturaleza'>Naturaleza</option>
          <option value='Literatura'>Literatura</option>
          <option value='Musica'>Música</option>
          <option value='Salud'>Salud</option>
          <option value='Arte'>Arte</option>
          <option value='Cultura'>Cultura</option>
          <option value='Otras'>Otras...</option>
        </select>

        <select
          id='cities'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-60 p-2.5 '
        >
          <option defaultValue>Filtrar por ciudad</option>
          <option value='Andalucia'>Andalucía</option>
          <option value='Aragon'>Aragón</option>
          <option value='Asturias'>Asturias</option>
          <option value='Cantabria'>Cantabria</option>
          <option value='Castilla_León'>Castilla y León</option>
          <option value='Castilla_La_Mancha'>Castilla La Mancha</option>
          <option value='Cataluña'>Cataluña</option>
          <option value='Madrid'>Madrid</option>
          <option value='Valencia'>Valencia</option>
          <option value='Extremadura'>Extremadura</option>
          <option value='Galicia'>Galicia</option>
          <option value='Baleares'>Baleares</option>
          <option value='Canarias'>Canarias</option>
          <option value='Rioja'>La Rioja</option>
          <option value='Murcia'>Murcia</option>
          <option value='Navarra'>Navarra</option>
          <option value='Pais_Vasco'>Pais Vasco</option>
        </select>
      </div>
      {authUser && (
        <div className='flex gap-6 '>
          <NavLink
            to='/addMeetup'
            className='flex justify-center items-center h-14 w-32 px-3 text-md font-medium text-center text-white
            bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4
            focus:outline-none focus:ring-teal-300 dark:bg-teal-600
            dark:hover:bg-teal-700 dark:focus:ring-teal-800'
          >
            Crear Meetup
          </NavLink>
        </div>
      )}
    </div>
  );
};
