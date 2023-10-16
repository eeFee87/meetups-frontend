import { getToken } from '../utils/getToken';
const url = import.meta.env.VITE_API_URL;

export const registerService = async (registerData) => {
  try {
    const response = await fetch(`${url}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerData)
    }).catch(function (error) {
      // Error handling here!

      throw new Error(`HTTP error! Status: ${error}`);
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en la solicitud:', error.response);
    throw error;
  }
};

export const loginService = async (loginData) => {
  try {
    const response = await fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    }).catch(function (error) {
      // Error handling here!
      throw new Error(`HTTP error! Status: ${error}`);
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en la solicitud:', error.response);
    throw error;
  }
};

export const getProfileUserService = async () => {
  const token = getToken();

  const response = await fetch(`${url}/users`, {
    headers: {
      Authorization: token
    }
  });
  const data = await response.json();
  console.log(data);

  return data;
};
