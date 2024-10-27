import styled, { keyframes } from "styled-components";

const moveBackground = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const size = {
    desktop: '1280px',
}
  
export const device = {
  desktop: `(min-width: ${size.desktop})`,
};

export const SuccessStyledContainer = styled.div`
  padding: 20px 20px 0 20px;

  .top-image-container {
    display: none;
  }
  
  .header, .header-two {
    font-family: "Libre-Bold", sans-serif;
    text-align: center;
    overflow-y: hidden;
  }

  .header, .header-two, .header-description {
    padding: 0 20px;
  }

  .header {
    font-size: 18px;
  }

  .header-two {
    font-size: 45px;
    font-family: "Libre-Bold", sans-serif;
  }

  .header-description {
    font-family: "Libre", sans-serif;
    text-align: center;
  }

  .red {
     color: #BB2728; 
  }

  .skinny {
      font-family: "Libre-Italic", sans-serif;
  }

  .header-description {
    font-size: 14px;
  }

  .products-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
  }

  .bottom-image-container {
    display: flex;
    justify-content: center;
  }

  .button-container {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
  
  .cta-button {
    font-weight: bold;
    width: 132px;
    height: 42px;
    background-color: #BB272B;
    color: white;
    border: none;
  }

  .cta-button:hover {
    background-color: #7c1a1c;
  }

  @media ${device.desktop} {

    background-image: url('./images/rosa-background-logo.svg');
    background-size: cover;
    animation: ${moveBackground} 90s ease-in-out infinite;
    padding: 0px;
    display: flex;
    justify-content: start;

    .top-image-container {
      display: block;
      display: flex;
      width: 40%;
    }

    .header, .header-two, .header-description {
      text-align: left;
      padding: 5px;
    }

    .success-container {
      max-width: 1280px;
      display: flex;
    }

    .spot-light-container {
      justify-content: center;
      align-items: center;
      margin-top: 20%;
      margin-bottom: 50%;
      padding-right: 50px;
    }

    .products-container {
      flex-direction: row;
    }

    .button-container {
    justify-content: start;
  }

    .bottom-image-container{
      display: none;
    }
  }
`;