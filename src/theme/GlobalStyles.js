
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    font-family: ${(props) => props.theme.fonts.base};  
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.darkBlue};
    
  }
  main{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;

  }


  a {
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default GlobalStyles;