import { useState } from 'react';
import swal from 'sweetalert';
import { createMeetupService } from '../services/meetups';
import { useNavigate } from 'react-router-dom';
function AddMeetupForm() {
  const navigate = useNavigate();
  const [meetupData, setMeetupData] = useState({
    title: '',
    description: '',
    category: '',
    totalInscriptions: 0,
    photo: '',
    city: '',
    date: ''
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setMeetupData({
      ...meetupData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await createMeetupService(meetupData);
      console.log(result);
      if (result.status === 'error') {
        throw new Error(result.message);
      } else {
        swal('Meetup creado con éxito');
        navigate('/');
      }
    } catch (error) {
      swal('Ha ocurrido un error', error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h3 className=' text-center text-5xl font-bold text-teal-600 drop-shadow-lg'>
        "¡Crea Tu Meetup en un instante!"
      </h3>
      <form
        onSubmit={handleSubmit}
        className='mx-20  xl:mx-40 2xl:mx-60 2xl:px-40 mt-20 mb-10'
      >
        <div className='mb-6'>
          <label
            htmlFor='title'
            className='block mb-2 text-2xl font-semibold text-gray-900'
          >
            Título
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={meetupData.title}
            onChange={handleInputChange}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5'
            placeholder='Ponle título a tu meetup'
            required
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='description'
            className='block mb-2 text-2xl font-semibold text-gray-900'
          >
            Descripción
          </label>
          <textarea
            type='text'
            id='description'
            name='description'
            value={meetupData.description}
            onChange={handleInputChange}
            className='bg-gray-50 border min-h-[200px] border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 '
            placeholder='Inserta una descripción para tu nueva meetup'
            required
          />
        </div>
        <div className='flex flex-col lg:flex-row  lg:gap-10'>
          <div className=' flex flex-col justify-center'>
            <label
              htmlFor='categories'
              className='block mb-2 text-2xl font-semibold text-gray-900'
            >
              Selecciona una opción
            </label>

            <div className='flex flex-col sm:flex-row gap-4'>
              <select
                id='categories'
                name='category'
                value={meetupData.category}
                onChange={handleInputChange}
                className=' w-60 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-teal-500 focus:border-teal-500 block  p-2.5 '
              >
                <option defaultValue>Elige una temática</option>
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
                name='city'
                value={meetupData.city}
                onChange={handleInputChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-60 p-2.5 '
              >
                <option defaultValue>Elige una ciudad</option>
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
          </div>
          <div className='mb-6 mt-6'>
            <label
              htmlFor='date'
              className='block mb-2 text-2xl font-semibold text-gray-900'
            >
              Fecha y hora
            </label>
            <input
              type='datetime-local'
              id='date'
              name='date'
              value={meetupData.date}
              onChange={handleInputChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-60 p-2'
              required
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <label
            className='block mb-2 text-2xl font-semibold text-gray-900 '
            htmlFor='file_input'
          >
            Añadir imagen
          </label>
          <input
            type='file'
            id='file_input'
            name='photo'
            onChange={handleInputChange}
            className='block w-full text-lg  text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dar'
          />
        </div>

        <div className='flex justify-center mt-6'>
          <button
            disabled={loading}
            type='submit'
            className='text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center mt-10'
          >
            Crear Meetup
          </button>
        </div>
      </form>
    </>
  );
}

export default AddMeetupForm;
