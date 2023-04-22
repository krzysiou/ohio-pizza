import styled from '@emotion/styled';

const HomeStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;

    > div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 150px;
        color: #3f3f3f;
        width: 60%;

        > p {
            margin: 0;
        }

        > p:first-of-type {
            font-size: 256px;
            font-weight: 800;
            width: 100%;
            color:  #ff5b0f;
            text-align: center;
        }

        > p:last-of-type {
            font-size: 36px;
            width: 80%;
            text-align: right;
            color: #1c1c1c;
        }

        > img {
            position: absolute;
            left: 50px;
            top: 80px;
            z-index: -1;
        }
    }
`;

export { HomeStyled };
