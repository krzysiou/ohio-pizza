import { useCallback, useState } from 'react';
import { ReservationStyled } from './Reservation.styles';
import axios from 'axios';

const Reservation: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleClick = useCallback(
    async () => {
      if(tel && surname && date) {
        const response = await axios.post(
          'http://localhost:3001/admin/add-reservation',
          { date, tel, surname },
        );
        setMessage(response.data.message);
      } else {
        setMessage('Please fill all the fields');
      }
    },
    []
  );

  return (
    <ReservationStyled>
      <div className='reservation-container'>
        <form action="">
          <div className='input-fields'>
            <div className='input-bundle'>
              <p>Surname</p>
              <input type="text" value={surname} className='username' placeholder='johndoe' onChange={(event) => setSurname(event.currentTarget.value)} />
            </div>
            <div className='input-bundle'>
              <p>Tel</p>
              <input type="password" value={tel} className='password' onChange={(event) => setTel(event.currentTarget.value)} />
            </div>
            <div className='input-bundle'>
              <p>Date</p>
              <input type="text" value={date} className='password' placeholder='YYYY-MM-DD' onChange={(event) => setDate(event.currentTarget.value)} />
            </div>
          </div>
          <button type="button" className='submit' onClick={handleClick}>Submit</button>
        </form>
      </div>
      <p className='message'>{message}</p>
    </ReservationStyled>
  );
};

export { Reservation };