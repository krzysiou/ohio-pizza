import facebook from 'assets/facebook_icon.png';
import instagram from 'assets/instagram_icon.png';
import twitter from 'assets/twitter_icon.png';
import { ContactStyled } from './Contact.styles';

const Contact: React.FC = () => {
  return (
    <ContactStyled>
      <div>
        <h1>Feel free to contact us directly</h1>
        <p>Email: ohio.pizza@gmail.com<br/>
        Phone: 666-666-666</p>
        <h1>Or visit our place</h1>
        <p>2137 RAILROAD ST<br/>
        OBERLIN OH 43825<br/>
        USA</p>
        <h1>Opening hours</h1>
        <p>Mon - Thu: 10am - 10pm<br/>
        Fri - Sun: 10am - 11pm</p>
        <h1>Check out our socials</h1>
        <div className="image-container">
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook icon" />
          </a>
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram icon" />
          </a>
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter icon" />
          </a>
        </div>
      </div>
    </ContactStyled>
  );
};

export { Contact };