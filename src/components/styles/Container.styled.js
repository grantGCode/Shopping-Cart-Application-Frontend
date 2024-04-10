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

  export const TitleContainer = styled.div`
    @media ${device.mobile} {
      display: none;
    }
 
    @media ${device.laptop} { 
      display: block;
      color: white;

      h1, p {
        margin: 0;
      }

      h1 {
        display: flex;
        justify-content: start;
        font-size: 4em;
        text-align: center;
      }

      p {
        display: flex;
        justify-content: start;
        font-size: 1em;
        font-style: italic;
      }

        h1, p {
          max-width: 500px;
          padding-left: 5px;
          font-size: 1.5em;
          text-align: end;
    }

      
    @media ${device.desktop} {
      color: white;

      h1,
      p {
        margin: 0;
      }
    
      h1 {
        display: flex;
        justify-content: start;
        font-size: 4em;
        text-align: center;
      }
    
      p {
        display: flex;
        justify-content: start;
        font-size: 1em;
        font-style: italic;
      }
    
        h1, p {
          max-width: 500px;
          padding-left: 5px;
          font-size: 1.5em;
          text-align: end;
        }
    }
  
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: rgba(195, 195, 195, 0.5);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  @media ${device.mobile} { 
    max-width: 500px;
    position: fixed;
    bottom: 0;
  }
    
  @media ${device.laptop} { 
    max-width: auto;
    position: fixed;
  }
    
  @media ${device.desktop} {
    max-width: 1400px;
    position: fixed;
  }
`;

export const ButtonCart = styled.button`
justify-content: end;
background-color: transparent;
color:  white;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
border: 2px solid ${props => 
  props.borderColor || '#3498db'};
`;

export const RemoveButton = styled.button`

`