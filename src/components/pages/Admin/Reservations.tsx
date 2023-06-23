import { useCallback } from 'react';
import { ReservationsStyled } from './Reservations.styles';
import axios from 'axios';
import useFetch from 'hooks/useFetch';

interface Reservation {
  reservation_id: number;
  reservation_date: string;
  phone_number: string;
  lastname: string;
}

interface ReservationsProps {
  auth: string;
}

const Reservations: React.FC<ReservationsProps> = ({ auth }) => {
  const { data: reservations } = useFetch<Reservation[]>(
    'http://localhost:3001/admin/reservation'
  );

  const handleDelete = useCallback(
    async (id: number) => {
      await axios.post(
        'http://localhost:3001/admin/delete-reservation',
        { reservationId: id },
        { headers: { Authorization: `Bearer ${auth}` } }
      );
      window.location.reload();
    },
    [auth]
  );
  
  if(!reservations) {
    return <></>;
  }

  const composedReservations = reservations.length ? reservations.map(({reservation_id, reservation_date, phone_number, lastname}) => {
    const newDate = new Date(reservation_date);
    return(
      <div className='reservation' key={reservation_id}>
        <p className='entry'><span className='label'>Date:</span> {Intl.DateTimeFormat(['ban', 'id']).format(newDate)}</p>
        <p className='entry'><span className='label'>tel.</span> {phone_number}</p>
        <p className='entry'><span className='label'>Surname:</span> {lastname}</p>
        <button className='remove-button' onClick={() => handleDelete(reservation_id)}>X</button>
      </div>
    );
  }) : <p>There are no reservations</p>;

  return (
    <ReservationsStyled>
      {composedReservations}
    </ReservationsStyled>
  );
};

export { Reservations };
