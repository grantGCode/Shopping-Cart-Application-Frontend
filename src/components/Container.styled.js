import styled from "styled-components";

const size = {
    iPhone:'375px',
    mobile:'425px',
    laptop: '1024px',
    desktop: '2560px'
  }
  
  export const device = {
    iPhone: `(min-width: ${size.iPhone})`,
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
    margin-top: 36px;
    padding-left: 50px; 
    padding-right: 50px;
    border-bottom: 4px solid rgba(140, 140, 140, 0.5);
    border-radius: 2px
  }
  
  @media ${device.desktop} {
    display: flex;
    justify-content: center  ;
    align-items: center;
    max-width: 3500px;
    margin-top: 36px;
    padding-left: 50px; 
    padding-right: 50px;
    border-bottom: 4px solid rgba(140, 140, 140, 0.5);
    border-radius: 2spx    
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
    display: flex;
    max-width: 860px;
    max-height: 990px;
  }
`;

export const Info = styled.div`

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 900px;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Prompt", sans-serif;
  font-size:15px;
  
  @media ${device.iPhone} {
    margin-top: 20px;
    padding: 5px 30px 5px 30px;
    background: gray;
    border-radius: 6px;
    border: 2px solid rgba(0.231, 0.231, 0.231, 1);
  
    &:hover {
      color: white; 
      background: rgba(83, 83, 83, 1);
      border: 2px solid rgba(0.231, 0.231, 0.231, 1);
      border-radius: 6px;
      font-size:12px;                
    }
  } 

  @media ${device.mobile} {
    margin-top: 20px;
    padding: 5px 30px 5px 30px;
    background: gray;
    border-radius: 6px;
    border: 2px solid rgba(0.231, 0.231, 0.231, 1);
  
    &:hover {
      color: white; 
      background: rgba(83, 83, 83, 1);
      border: 2px solid rgba(0.231, 0.231, 0.231, 1);
      border-radius: 6px;
      font-size:12px;                
    }
  }

  @media ${device.laptop} {
    margin-top: 3px;
    margin-bottom: 0px;
    padding: 5px 30px 5px 30px;
    background: transparent;
    border: none;
  
    &:hover {
      color: white; 
      background: rgba(83, 83, 83, .5);
      border: none;
      border-radius: 6px;
      font-size: 15px;                
    }
  }

  @media ${device.desktop} {
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 5px 30px 5px 30px;
    background: transparent;
    border: none;
  
    &:hover {
      color: white; 
      background: rgba(83, 83, 83, .5);
      border: none;
      border-radius: 6px;
      font-size:15px;                
    }
  }

`;