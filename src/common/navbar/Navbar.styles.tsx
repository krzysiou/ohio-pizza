import styled from '@emotion/styled';

const NavbarStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 50px;
    height: 60px;
    background: #fcf7f5;
    font-size: 18px;

    > img {
        aspect-ratio: 1 / 1;
        height: 60px;
    }

    a {
        position: relative;
        color: #ff5b0f;
        text-decoration: none;
        padding: 0 15px;

        :not(:last-of-type)::after {
            content: '';
            position: absolute;
            background-color: #ff8045;
            width: 1px;
            height: 18px;
            top: 0;
            right: 0;
            transform: translateY(20%);
        }
    }

`;

export { NavbarStyled };
