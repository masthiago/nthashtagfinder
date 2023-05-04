// Paulo
import {
  StyledHeader,
  StyledButton,
  StyledMain,
} from './components/Home.style';
import iconAbout from './assets/iconAbout.svg';
import iconUser from './assets/iconUser.svg';

// Thiago 
import Results from '../components/Results';


function App() {
  return (
    <>
      {/* Paulo - Inicio */}
      <StyledHeader>
        <div>
          hashtag<strong>finder</strong>
        </div>
        <div>
          <StyledButton backgroundColor='#72EFDB' color='#0a1744'>
            <img className='iconHeader' src={iconAbout} alt='ícone Sobre' />
            Sobre
          </StyledButton>
          <StyledButton>
            <img className='iconHeader' src={iconUser} alt='ícone Login' />
            Login
          </StyledButton>
        </div>
      </StyledHeader>
      <StyledMain>
        <></>
      </StyledMain>
      {/* Paulo - Fim */}

      {/* Thiago - Incio */}
      <Results />
      {/* Thiago - Fim */}
    </>
  );
}

export default App;
