import styled from "styled-components";

const size = {
    mobile:'425px',
    laptop: '1024px',
    desktop: '2560px'
  }
  
  export const device = {
    mobile: `(min-width: ${size.mobile})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
  };


export const DesktopContainer = styled.div`
  @media ${device.iPhone} {
    display: none;
  } 

  @media ${device.mobile} {
    display: none;
  }
  
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    margin-top: 60px;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 40px; 
    padding-right: 40px;
    border-bottom: 3px solid gray;
    border-radius: 4px
  }
  
  @media ${device.desktop} {

  }
`;

export const ProductImage =styled.img`
  @media ${device.iPhone} {
    display: none;
  } 

  @media ${device.mobile} {
    display: none;
  }

  @media ${device.laptop} {
    display: flex;
    max-width: 530px;
    max-height: 430px;  
  }

  @media ${device.desktop} {

  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BrandName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: bold;
  color: rgba(72, 23, 89, 1)
`;

export const BrandInfo = styled.p`
font-family: "Prompt", sans-serif;
font-weight: 400;  
font-style: italic;
`;

export const RemoveButton = styled.button`

`;