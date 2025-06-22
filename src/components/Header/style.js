import styled from "styled-components";

const HeaderContainer=styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white}; 
img {
    width: 18.7rem;
  }
`;

const HeaderNav=styled.nav` 
    width: 100%;
    background-color: ${(props) => props.theme.colors.darkBlue}; 
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    list-style: none;
    box-sizing: border-box;
`;


const HeaderLink=styled.a `
    color: ${(props) => props.theme.colors.white}; 
    text-decoration: none;
    font-weight: 600;

    &:hover {
        color: ${(props) => props.theme.colors.lightBlue}; 
    }
`

const HeaderBanner=styled.div `
    width: 100%;
    position: relative;
    background-color: ${(props) => props.theme.colors.red}; 
    padding: 2rem 0;
    text-align: center;
`

const HeaderTitle=styled.h1 `
    color: ${(props) => props.theme.colors.white}; 
    font-size: 2rem;
    margin: 0;
`

const HeaderSlogan=styled.p `
    color: ${(props) => props.theme.colors.white}; 
    font-size: 1.2rem;
`

export{
    HeaderContainer,
    HeaderBanner,
    HeaderLink,
    HeaderNav,
    HeaderSlogan,
    HeaderTitle,
}