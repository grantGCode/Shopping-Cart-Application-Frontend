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
    font-family: "Libre-Bold";
    src: url('./fonts/LibreBaskerville-Bold.ttf') format('truetype');
    font-family: "Libre-Italic";
    src: url('./fonts/LibreBaskerville-Italic.ttf') format('truetype');
  }

  background-color: #f5f5f5;
  padding: 20px 20px 0 20px;
  
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
  }
`;