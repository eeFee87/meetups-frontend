function AddMeetupForm() {
  return (
    <>
      <h3 className=' text-center text-5xl font-bold text-teal-600 drop-shadow-lg'>
        "¡Crea Tu Meetup en un instante!"
      </h3>
      <form className='mx-80 px-48 mt-20'>
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
            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5'
            placeholder='Ponle título a tu meetup'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='description'
            className='block mb-2 text-2xl font-semibold text-gray-900'
          >
            Descripción
          </label>
          <textarea
            type='text'
            id='description'
            className='bg-gray-50 border min-h-[200px] border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 '
            placeholder='Inserta una descripción para tu nueva meetup'
            required
          />
        </div>
        <div className='mb-6 flex flex-col'>
          <label
            htmlFor='categories'
            className='block mb-2 text-2xl font-semibold text-gray-900'
          >
            Selecciona una opción
          </label>

          <div className='flex gap-4'>
            <select
              id='categories'
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
            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-60 p-2.5'
            required
          />
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center mt-6'
          >
            Crear Meetup
          </button>
        </div>
      </form>
    </>
  );
}

export default AddMeetupForm;
