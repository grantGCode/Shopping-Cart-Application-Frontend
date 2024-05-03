import styled from "styled-components";

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
  }

  background-color: #f5f5f5;
  border: 1px solid red;
  padding: 20px;
  
  .header, .header-two, .header-description {
    font-family: "Libre", sans-serif;
    text-align: center;
  }

  .header {
    font-size: 18px;
  }

  .header-two {
    font-size: 45px;
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

  .footer {
    background-color: black;
    background-image: url('./images/ivan-jevtic-cutout.png');
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

  @media ${device.desktop} {
  }
`;