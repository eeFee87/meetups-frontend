import swal from 'sweetalert';
import { useEffect, useState } from 'react';
import { listMeetupsService } from '../services/meetups';
export const useMeetups = () => {
  const [meetups, setMeetups] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMeetups() {
      try {
        setLoading(true);
        const data = await listMeetupsService();
        setMeetups(data.meetups);

        setLoading(false);
      } catch (error) {
        swal('Ha ocurrido un error', error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMeetups();
  }, []);

  return {
    meetups,
    loading
  };
};
