import styled from "styled-components";

const FooterContainer=styled.footer `
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: ${(props) => props.theme.colors.white}; 
    padding: 2rem;
    text-align: center;
`

    const FooterSocial=styled.div `
        margin-top: 1rem;
    `

    const FooterIcon =styled.a`
        color: ${(props) => props.theme.colors.lightBlue}; ;
        margin: 0 1rem;
        text-decoration: none;

        &:hover {
            color: ${(props) => props.theme.colors.white};
        }
    `

export {
    FooterContainer,
    FooterIcon,
    FooterSocial,
}