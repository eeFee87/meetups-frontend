export const getMeetups = async () => {
  const response = await fetch('http://localhost:3000/meetups');
  const data = await response.json();
  return data;
};
