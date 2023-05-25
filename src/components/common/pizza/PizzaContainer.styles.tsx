import styled from '@emotion/styled';

const PizzaContainerStyled = styled.div<{ imageUrl: string }>(
  ({ imageUrl }) => ({
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ' > div': {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)',
      color: '#fff',
      padding: '20px',
    },
    '.pizza-name': {
      fontSize: '64px',
      fontWeight: 800,
      width: '100%',
      color: '#ff5b0f',
    },
    '.price': {
      fontSize: '86px',
      fontWeight: 800,
      width: '100%',
    },
    '.ingredient': {
      fontSize: '24px',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  })
);

export { PizzaContainerStyled };
