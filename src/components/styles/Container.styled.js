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
  
  @media ${device.mobile} { 
    max-width: 500px;
    position: fixed;
    bottom: 0;
  }
    
  @media ${device.laptop} { 
    display: flex;
    justify-content: space-between;
    max-width: auto;
    position: fixed;
  }
    
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    position: fixed;
  }
`;

export const ButtonCart = styled.button`
  @media ${device.mobile} {
    display: flex;
    flex-direction: row;
    margin-left: 180px;
    padding-bottom: 20px
    padding: 10px;
    background: linear-gradient(to bottom right, #0dcaf0, #fff);;
    color:  white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border: 2px solid ${props => 
      props.borderColor || '#3498db'
    };
    border-radius: 6px;
    
  }

  @media ${device.laptop} {
    max-width: 500px;
    position: fixed;
    bottom: 0;
    justify-content: end;
    background-color: #0dcaf0;
    color:  white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border: 2px solid ${props => 
      props.borderColor || '#3498db'
    };
  }

  @media ${device.desktop} {
    max-width: 500px;
    position: fixed;
    bottom: 0;
    justify-content: end;
    background-color: #0dcaf0;
    color:  white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border: 2px solid ${props => 
      props.borderColor || '#3498db'
    };
  }
`;

export const YourCart = styled.h5`
  @media ${device.mobile} {
    display: none;
  }
  
  @media ${device.laptop} {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  }

  @media ${device.desktop} {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  }
`

export const FontAwesomeIcon = styled.h5`
  
`

export const CartCount =styled.h5`

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

`

export const RemoveButton = styled.button`

`