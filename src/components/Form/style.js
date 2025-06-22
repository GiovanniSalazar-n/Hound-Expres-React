import styled from "styled-components"

const FormContainer=styled.section `
    background-color: ${(props) => props.theme.colors.darkBlue}; 
    color:${(props) => props.theme.colors.white}; 
    padding: 2rem;
    border-radius: 8px;

`
const FormTitle=styled.h2 `
        text-align: center;
`

const FormAplication=styled.form` 
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `
const FormGroup=styled.div` 
        display: flex;
        flex-direction: column;
    
`
const FormInput=styled.input `
        padding: 0.5rem;
        border: 1px solid ${(props) => props.theme.colors.lightBlue}; 
        border-radius: 5px;
    `

const FormSubmit=styled.button `
        background-color: ${(props) => props.theme.colors.lightBlue}; 
        color: ${(props) => props.theme.colors.darkBlue}; 
        font-weight: bold;
        border: none;
        padding: 0.7rem;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: ${(props) => props.theme.colors.white}; 
            color: ${(props) => props.theme.colors.darkBlue}; 
        }
    `
export{
    FormAplication,
    FormContainer,
    FormGroup,
    FormInput,
    FormSubmit,
    FormTitle
}