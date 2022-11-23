import styled from "styled-components";
// import { css } from 'styled-components';

import Select from "react-select";


export const FormDiv = styled.div`
  /* border: 2px solid red; */

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
   width: 300px;
   margin-top: 10px;
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

export const Logo = styled.div`
  background-color: white;
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  color: #393e46;
  font-weight: 800;
  font-size: 25px;
  max-width: 500px;

  i {
    color: green;
  }
  span {
    font-family: "Girassol", sans-serif;
    color: black;
    font-weight: 400;
  }
`;

export const FormContainer = styled.form`
  /* border: 3px solid blue; */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  background-color: white;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  .Select__control {
    cursor: pointer;
    border-radius: 10px;
  }

  .Select__control:hover {
    border-color: #a1a1a1;
  }

  .Select__control--is-focused {
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
    border: 1px solid black;
  }

  .Select__menu {
    color: #3c3d3e;
  }
`;

export const WrapperGrid = styled.div`
  /* grid-column: 1/2; */
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid gray;
  position: relative;
  border-radius: 10px;

  i {
    position: absolute;
    /* border: 1px solid green; */
    margin-left: 3px;
    font-size:20px;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  padding-left: 2rem;
  
 
  width: 100%;
  border: 1px solid red;
  font-family: "Girassol", sans-serif;
  border: none;
  font-size: 1.5rem;
  border-radius: 10px;
`;

export const StyledButton = styled.button`
  background: #e6343b;
  border: 0;
  color: #fff;
  padding: 1em;
  text-transform: uppercase;
  width: 100%;
  border-radius: 10px;

  &:hover,
  &:focus {
    background: #b8161f;
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`;
