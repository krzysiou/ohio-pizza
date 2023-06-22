//UNCOMMENT AFTER API SYNC
//import useFetch from 'hooks/useFetch';
import { useCallback } from 'react';
import { ReservationsStyled } from './Reservations.styles';
import axios from 'axios';

interface Reservation {
  reservation_id: number;
  reservation_date: string;
  tel: string;
  surname: string;
}

// REMOVE AFTER API SYNC
const mockReservations: Reservation[] = [
  {
    reservation_id: 1,
    reservation_date: '2023-06-20',
    tel: '666666666',
    surname: 'Kowalski',
  },
  {
    reservation_id: 2,
    reservation_date: '2023-06-20',
    tel: '111111111',
    surname: 'Karmelek',
  },
  {
    reservation_id: 3,
    reservation_date: '2023-06-20',
    tel: '512381922',
    surname: 'Kukurydza',
  },
  {
    reservation_id: 4,
    reservation_date: '2023-06-21',
    tel: '837215922',
    surname: 'Kot',
  },
  {
    reservation_id: 5,
    reservation_date: '2023-06-21',
    tel: '298638291',
    surname: 'Kowal',
  },
  {
    reservation_id: 6,
    reservation_date: '2023-06-21',
    tel: '298638291',
    surname: 'Kowal',
  },
  {
    reservation_id: 7,
    reservation_date: '2023-06-20',
    tel: '512381922',
    surname: 'Kukurydza',
  },
  {
    reservation_id: 8,
    reservation_date: '2023-06-21',
    tel: '837215922',
    surname: 'Kot',
  },
  {
    reservation_id: 9,
    reservation_date: '2023-06-21',
    tel: '298638291',
    surname: 'Kowal',
  },
  {
    reservation_id: 10,
    reservation_date: '2023-06-21',
    tel: '298638291',
    surname: 'Kowal',
  }
];

interface ReservationsProps {
  auth: string;
}

const Reservations: React.FC<ReservationsProps> = ({ auth }) => {
  //UNCOMMENT AFTER API SYNC
  // const { data: reservations } = useFetch<Reservation[]>(
  //   'http://localhost:3001/reservations'
  // );

  const handleDelete = useCallback(
    async (id: number) => {
      await axios.post(
        'http://localhost:3001/admin/delete-reservation',
        { reservationId: id },
        { headers: { Authorization: `Bearer ${auth}` } }
      );
      window.location.reload;
    },
    [auth]
  );

  const reservations: Reservation[] = mockReservations;

  const composedReservations = reservations.map(({reservation_id, reservation_date, tel, surname}) => {
    return(
      <div className='reservation' key={reservation_id}>
        <p className='entry'><span className='label'>Date:</span> {reservation_date}</p>
        <p className='entry'><span className='label'>tel.</span> {tel}</p>
        <p className='entry'><span className='label'>Surname:</span> {surname}</p>
        <button className='remove-button' onClick={() => handleDelete(reservation_id)}>X</button>
      </div>
    );
  });

  return (
    <ReservationsStyled>
      {composedReservations}
    </ReservationsStyled>
  );
};

export { Reservations };
