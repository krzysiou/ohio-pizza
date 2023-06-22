import styled from '@emotion/styled';

const EditPizzaStyled = styled.div`
  font-size: 14px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 25px;

  .pizza-container {
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    background-color: #fcf7f5;
    padding: 25px;

    .pizza-box {
      margin: 10px;
      display: flex;
      flex-direction: column;

      .delete-btn {
        cursor: pointer;
        color: red;
        font-weight: 500;
        font-size: 20px;
      }

      .name {
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .ingredient {
        padding-left: 10px;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .name-input {
      border: none;
      border-bottom: 2px solid black;
      padding: 10px;
      font-size: 16px;
      outline: none;
      margin-bottom: 10px;
    }

    .ingredient-input {
      border: none;
      border: 1px solid black;
      margin: 5px;
      padding: 10px;
      margin-bottom: 10px;
    }

    .price-container {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;

      span {
        font-weight: 500;
        font-size: 22px;
      }
    }

    .price-input,
    .image-input {
      border: none;
      padding: 10px;
      border-left: 2px solid black;
    }
  }

  .submit {
    background-color: #ff8045;
    padding: 10px 25px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;

export { EditPizzaStyled };
