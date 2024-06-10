// App.js
import logo from './logo.svg';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import './App.css';
import { AnimatedLogo,DarkButton} from './Components/Button/Button.styles';
import { StyledButton, FancyButton, SubmitButton } from './Components/Button/Button.styles';

const theme = {
  dark : {
    primary :'#000' ,
    text: '#fff'
  },
  light: {
    primary: '#fff' ,
    text: '#000'
  },
  
  fontFamily: 'Segow UI'
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props) => props.theme.fontFamily};
  }
`

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <GlobalStyle/>
        <div className="App">
          <AnimatedLogo src ={logo}></AnimatedLogo>
          <StyledButton type='submit' >Styled Button</StyledButton>
          <StyledButton variant='outline'>Styled Button Outline</StyledButton>
          <div>
            <br />
          </div>
          <FancyButton>Fancy Button</FancyButton>
          <DarkButton>Dark Theme</DarkButton>
          <div>
          <br />
          </div>      
          <SubmitButton>Submit</SubmitButton>
        </div>
    </ThemeProvider>
  );
}

export default App;
