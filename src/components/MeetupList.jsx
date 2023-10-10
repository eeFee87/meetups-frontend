import { useEffect, useState } from 'react';
import { getMeetups } from '../services/meetups';

function MeetupList() {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    async function fetchMeetups() {
      const data = await getMeetups();
      setMeetups(data.meetups);
    }
    fetchMeetups();
  }, []);

  return (
    <ul>
      {meetups.map((meetup) => (
        <li key={meetup.id}>{meetup.title}</li>
      ))}
    </ul>
  );
}

export default MeetupList;
