import { AdminStyled } from './Admin.styles';
import { useEffect, useState } from 'react';
import { EditPizza } from './EditPizza';
import { Reservations } from './Reservations';

export type AdminView = 'edit' | 'reservations';

const Admin: React.FC = () => {
  const [auth, setAuth] = useState<string>('');
  const [view, setView] = useState<AdminView>('edit');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      window.location.href = '/admin/login';
      return;
    }
    setAuth(accessToken);
  }, []);

  const editButtonClick = () => setView('edit');
  const reservationsButtonClick = () => setView('reservations');

  const choosenComponent = view === 'edit' ? <EditPizza auth={auth}/> : <Reservations auth={auth}/>;

  return (
    <AdminStyled view={view}>
      <div className='buttons'>
        <button className='button button-edit' onClick={editButtonClick}>Edit Pizza</button>
        <button className='button button-reservations' onClick={reservationsButtonClick}>Reservations</button>
      </div>
      <div className='content'>
        {choosenComponent}
      </div>
    </AdminStyled>
  );
};

export { Admin };
