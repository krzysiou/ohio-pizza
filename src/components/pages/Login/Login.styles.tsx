import styled from '@emotion/styled';

const LoginStyled = styled.div`
    font-size: 14px;

    .login-container {
        margin: 50px auto;
        padding: 25px;
        width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 23px 23px 24px -15px rgba(66, 68, 90, 1);
        border-radius: 10px;
        background-color: #fcf7f5;

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            .input-fields {
                margin-bottom: 20px;
                width: 100%;

                .input-bundle {
                    position: relative;
                    margin: 25px 0;
                    width: 100%;

                    &::before {
                        position: absolute;
                        width: 2px;
                        background-color: orange;
                        content: '';
                        height: 100%;
                        left: -5px;
                        top: 0;
                    }

                    p {
                        margin: 5px 0;
                        font-weight: 500;
                    }

                    input {
                        padding: 10px;
                        width: 100%;
                        height: 30px;
                        border: none;
                        border-radius: 2px;
                        background-color: #ffffff
                    }
                }
            }

            .submit {
                background-color: #ff8045;
                padding: 10px 25px;
                border-radius: 5px;
                border: none;
            }
        }
    }
`;

export { LoginStyled };
