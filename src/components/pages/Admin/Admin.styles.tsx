import styled from '@emotion/styled';
import { AdminView } from './Admin';

interface AdminStyledProps {
  view: AdminView;
}

const AdminStyled = styled.div<AdminStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 50px 0;

    .button {
      padding: 10px 25px;
      border-radius: 5px;
      border: none;
      margin: 0 15px;
      width: 120px;
    }

    .button-reservations {
      background-color: ${(props) => props.view === 'reservations' ? '#d9d9d9' : '#ff8045' };
      color: ${(props) => props.view === 'reservations' ? '#ff8045' : '#000000' };
    }

    .button-edit {
      background-color: ${(props) => props.view === 'edit' ? '#d9d9d9' : '#ff8045' };
      color: ${(props) => props.view === 'edit' ? '#ff8045' : '#000000' };
    }
  }

  .content {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 50px 0;
  }
`;

export { AdminStyled };
