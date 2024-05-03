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

export const StoreStyledContainer = styled.div`

  @font-face {
    font-family: "Libre";
    src: url('./fonts/LibreBaskerville-Regular.ttf') format('truetype');
    font-family: "Libre-Bold";
    src: url('./fonts/LibreBaskerville-Bold.ttf') format('truetype');
    font-family: "Libre-Italic";
    src: url('./fonts/LibreBaskerville-Italic.ttf') format('truetype');
  }

  padding: 20px 20px 0 20px;

  .top-image-container {
    display: none;
  }
  
  .header, .header-two {
    font-family: "Libre-Bold", sans-serif;
    text-align: center;
  }

  .header, .header-two {
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

  @media ${device.desktop} {

    background-image: url('./images/rosa-background-logo.svg');
    background-size: cover;
    animation: ${moveBackground} 90s ease-in-out infinite;
    padding: 0px;
    display: flex;
    justify-content: center;

    .top-image-container {
      display: block;
    }

    .header, .header-two, .header-description {
      text-align: left;
      padding: 0px;
    }

    .store-container {
      max-width: 1280px;
      display: flex;
    }

    .spot-light-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 50px;
    }

    .products-container {
      flex-direction: row;
    }

    .bottom-image-container{
      display: none;
    }
  }
`;