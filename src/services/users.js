export const registerService = async (registerData) => {
  console.log(registerData);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND}/users`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      }
    ).catch(function (error) {
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
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND}/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      }
    ).catch(function (error) {
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
