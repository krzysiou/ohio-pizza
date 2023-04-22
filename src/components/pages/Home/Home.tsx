import ohio from '../../../assets/ohio-state.png';
import { HomeStyled } from './Home.styles';

const Home: React.FC = () => {
  return (
    <HomeStyled>
      <div>
        <img src={ohio} alt="ohio border" />
        <p>OHIO</p>
        <p>オハイオピザへようこそ</p>
      </div>
    </HomeStyled>
  );
};

export { Home };

