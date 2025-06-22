import styled from "styled-components";

const StatusContainer=styled.section`
    background-color: ${(props) => props.theme.colors.lightBlue}; 
    padding: 2rem;
    border-radius: 8px;
`
const StatusTitle=styled.h2`
text-align: center;
`
const StatusInfo=styled.p`
        font-size: 1.2rem;
        text-align: center;
`
export{
    StatusInfo,
    StatusContainer,
    StatusTitle
}