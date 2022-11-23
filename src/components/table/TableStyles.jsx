import styled from "styled-components";


export const TableDiv = styled.div`
  /* border: 2px solid green; */
  height: 100%;
  margin-top: 100px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 300px;
    margin-bottom: 20px;
    margin-top: 0;
  }

  @media only screen and (min-width: 600px) {
    width: 380px;
    margin-bottom: 20px;
    margin-top: 0;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 380px;
    margin-bottom: 20px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    min-width: 500px;
    margin-bottom: 20px;
  }
`;

export const H3 = styled.h3`
  background-color: white;
  padding: 20px;
  text-align: center;
  font-family: "Girassol", sans-serif;
  font-size: 25px;
  border-radius: 10px;
  font-weight: 400;
  max-width: 500px;
  border: 3px solid green;
  
`;


export const STable = styled.table`

  width: 100%;
border-radius: 10px;
  border-collapse: collapse;
  text-align: center;
  overflow: hidden;
  border: 2px solid red;
  height: 100%;
  

  

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 300px;
    margin-bottom: 20px;
    
  }

  @media only screen and (min-width: 600px) {
    width: 380px;
    margin-bottom: 20px;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 380px;
    margin-bottom: 20px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    min-width: 500px;
    margin-bottom: 20px;
  }

`;

export const STHead = styled.thead`

/* position:sticky;
z-index: 100; */
`;

export const STHeadTR = styled.tr`
  background-color: lightpink;

`;

export const STH = styled.th`
  text-transform: capitalize;
  font-family: "Girassol", sans-serif;
  font-weight: 600;
  font-size: 20px;
  
  


  :not(:last-of-type){
    border-right: 1px solid pink;
  }
  :first-of-type{
    width: 1%;
    white-space: nowrap;
  }

`;

export const STBody = styled.tbody`
width: 100%;
`;

export const STRBodyTR = styled.tr`
background-color: beige;
border-radius: 10px;
`;

export const STD = styled.td`
padding: 2px;
border: 1px solid bisque;
font-size: 15px;
`;






