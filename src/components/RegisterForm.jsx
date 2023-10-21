import swal from 'sweetalert';
import { useState } from 'react';
import { registerService } from '../services/users';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    biography: '',
    avatar: ''
  });
  console.log(registerData);
  const [loading, setLoading] = useState(false);
  const handleInputChangeFile = ({ target }) => {
    const { name, files } = target;
    console.log(files[0]);
    setRegisterData({
      ...registerData,
      [name]: files[0]
    });
  };
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const passwordConfirmation = e.target.passwordConfirmation.value;

    if (password !== passwordConfirmation) {
      swal('Las contraseñas no coinciden');
    } else {
      try {
        setLoading(true);
        const formData = new FormData();
        for (const key in registerData) {
          formData.append(key, registerData[key]);
        }
        const result = await registerService(formData);
        if (result.status === 'error') {
          throw new Error(result.message);
        } else {
          swal('Usuario registrado con éxito');
          navigate('/login');
        }
      } catch (error) {
        swal('Ha ocurrido un error', error.message);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className='flex flex-col items-center gap-8 pb-5'>
      <h3 className=' text-center text-5xl font-bold text-teal-600 drop-shadow-md pt-16'>
        "¡Crea tu usuario!"
      </h3>
      <form
        onSubmit={handleSubmit}
        className='min-w-[300px] pt-12'
      >
        <div className='mb-6'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Nombre
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={registerData.name}
            onChange={handleInputChange}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='rodolfo'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={registerData.email}
            onChange={handleInputChange}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='nombre@email.com'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Contraseña
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={registerData.password}
            onChange={handleInputChange}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='repeat-password'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Repite contraseña
          </label>
          <input
            type='password'
            id='repeat-password'
            name='passwordConfirmation'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            required
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor='biography'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Biografía
          </label>
          <textarea
            type='textarea'
            id='biography'
            name='biography'
            value={registerData.biography}
            onChange={handleInputChange}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder=''
          />
        </div>
        <div className='w-full '>
          <label
            className='block mb-2 text-sm font-medium text-gray-900 '
            htmlFor='file_input'
          >
            Añadir imagen
          </label>
          <input
            type='file'
            id='file_input_avatar'
            name='avatar'
            onChange={handleInputChangeFile}
            className='mb-6  text-md  text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dar'
          />
        </div>

        <button
          disabled={loading}
          type='submit'
          className='text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
