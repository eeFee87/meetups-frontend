import swal from 'sweetalert';
import { useState } from 'react';
// import { loginService } from '../services/users';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function LoginForm() {
  const navigate = useNavigate();
  const { authLogin } = useAuth();
  // const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authLogin(loginData);
      swal('Has iniciado sesión');
      navigate('/');
    } catch (error) {
      swal('Ha ocurrido un error', error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='min-w-[300px] pt-20'
    >
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
          value={loginData.email}
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
          value={loginData.password}
          onChange={handleInputChange}
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          required
        />
      </div>

      <button
        type='submit'
        className='text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
      >
        Iniciar sesión
      </button>
    </form>
  );
}

export default LoginForm;
