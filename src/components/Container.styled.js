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


export const StoreStyledContainer = styled.div`

  .hero{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  li {
    list-style-type: none;
  }
  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${device.desktop} {

  } 
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