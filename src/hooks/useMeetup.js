import swal from 'sweetalert';
import { useEffect, useState } from 'react';
import { getOneMeetupService } from '../services/meetups';
export const useMeetup = (id) => {
  const [meetup, setMeetup] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMeetup() {
      try {
        setLoading(true);
        const data = await getOneMeetupService(id);
        setMeetup(data.meetup);
        setLoading(false);
      } catch (error) {
        swal('Ha ocurrido un error', error.message);
      } finally {
        setLoading(false);
      }
    }
    loadMeetup();
  }, [id]);
  return { meetup, loading };
};
