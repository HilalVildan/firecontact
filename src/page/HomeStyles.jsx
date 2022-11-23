import styled from "styled-components";

export const HomeContainer = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 30px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    background-size: cover;
    min-height: 100vh;
    /* padding-bottom: 10px; */
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    flex-direction: column;
    background-size: cover;
    min-height: 100vh;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    /* flex-direction: column; */
    background-size: cover;
    min-height: 100vh;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    background-size: cover;
    min-height: 100vh;
    /* padding-bottom: 20px; */
    gap: 2rem;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;
