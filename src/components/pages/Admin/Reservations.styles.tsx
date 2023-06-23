import styled from '@emotion/styled';

const ReservationsStyled = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .reservation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #ff8045;
    padding: 10px 25px;
    border-radius: 5px;
    border: none;
    margin: 0 15px;
    height: 250px;
    width: 250px;
    margin: 50px;

    .entry {
      color: black;

      .label {
        font-weight: 600;
        color: #fffff5;
      }
    }

    .remove-button {
      background-color: #fffff5;
      padding: 10px 25px;
      border-radius: 5px;
      border: none;
    }
  }
`;

export { ReservationsStyled };
