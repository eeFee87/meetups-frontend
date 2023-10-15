import { getToken } from '../utils/getToken';
const url = import.meta.env.VITE_API_URL;

export const listMeetupsService = async () => {
  const response = await fetch(`${url}/meetups`);
  const data = await response.json();
  return data;
};

export const createMettupService = async (meetupData) => {
  const token = getToken();
  const response = await fetch(`${url}/meetups`, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(meetupData)
    body: meetupData
  });
  const data = await response.json();
  return data;
};

export const inscribeMeetupService = async (meetupId) => {
  const token = getToken();
  const response = await fetch(`${url}/inscription/${meetupId}`, {
    // eslint-disable-next-line no-undef
    method,
    headers: {
      Authorization: token
    }
  });
  const data = await response.json();
  return data;
};

export const deleteMeetupService = async (meetupId) => {
  const token = getToken();
  const response = await fetch(`${url}/meetups/${meetupId}`, {
    method: 'DELETE',
    headers: {
      Authorization: token
    }
  });
  const data = await response.json();
  return data;
};
