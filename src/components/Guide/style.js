import styled from "styled-components";

const GuideTable=styled.table`
    width: 100%;
    border-collapse: collapse;
`
const GuideHeader=styled.th`
        background-color: ${(props) => props.theme.colors.darkBlue}; 
        color: ${(props) => props.theme.colors.white}; 
        padding: 0.8rem;
        text-align: left;
`
const GuideRow=styled.tr`
        padding: 0.8rem;
        text-align: left;
     &:nth-child(even) {
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: ${(props) => props.theme.colors.white};
  }
`
const GuideData=styled.td`
        padding: 0.8rem;
        border-bottom: 1px solid ${(props) => props.theme.colors.darkBlue}; 
`
const GuideBtn=styled.button`
        background-color: ${(props) => props.theme.colors.red}; 
        color: ${(props) => props.theme.colors.white}; 
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        border-radius: 5px;

        &:hover {
            background-color: ${(props) => props.theme.colors.darkBlue}; 
        }

`
export{
    GuideBtn,
    GuideData,
    GuideHeader,
    GuideRow,
    GuideTable
}