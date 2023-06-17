import styled from '@emotion/styled';

const ContactStyled = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    margin-left: 30px;

    > div {
        position: relative;
        display: flex;
        align-items: left;
        justify-content: start;
        flex-direction: column;
        padding-top: 100px;
        color: #3f3f3f;
        width: 50%;

        > p {
            text-align: left;
            width: 100%;
            font-size: 20px;
            font-weight: 600;
            margin-left: 30px;
            
        }

        > h1 {
            text-align: left;
            margin-bottom: 15px;
            width: 100%;
            color:  #ff5b0f;
            font-size: 40px;
            font-weight: 650;
        }

        > .image-container {
            display: flex;
            flex-direction: row;
            margin-top: 20px;
            margin-bottom: 50px;
        }

        > .image-container img {
            margin-left: 30px;
            height: 40px;
            width: 40px;
        }


    }
`;

export { ContactStyled };