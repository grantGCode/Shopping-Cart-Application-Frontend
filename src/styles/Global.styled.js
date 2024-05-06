import styled, { createGlobalStyle, } from 'styled-components';

export const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: "Libre";
    src: url('./fonts/LibreBaskerville-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: "Libre-Bold";
    src: url('./fonts/LibreBaskerville-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: "Libre-Italic";
    src: url('./fonts/LibreBaskerville-Italic.ttf') format('truetype');
  }
`;


const size = {
    desktop: '1280px',
}
  
export const device = {
  desktop: `(min-width: ${size.desktop})`,
};

export const GlobalStyledContainer = styled.div`
    background-color: #f5f5f5;
    
    .footer {
        background-color: black;
        background-image: url('./images/ivan-jevtic-bg-cutout.png');
        background-size: cover;
        font-family: "Libre", sans-serif;
        height: 240px;
        padding: 40px;
        color: white;
    }

    .footer-title {
        font-size: 18px;
    }

    .footer-description {
        padding-top: 10px;
        font-size: 10px;
    }

    .footer-copyright {
        font-size: 10px;
    }

    .footer-container-3 {
        display: none;
    }

    @media ${device.desktop} {

        .footer {
            display: flex;
            justify-content: center;
            height: auto;
        }

        .footer-position-container {
            display: flex;
            justify-content: space-between;
            max-width: 1280px;
        }

        .footer-container-1 {
            width: 25%;
            border-right: 2px solid white;
        }

        .footer-description {
            padding-right: 100px;
        }

        .footer-container-2 {
            display: flex;
            align-items: flex-end;
        }

        .footer-container-3 {
            display: flex;
        }
    }
`

export default GlobalStyledContainer;