import styled from 'styled-components'

const size = {
    iPhone:'375px',
    mobile:'425px',
    laptop: '1024px',
    desktop: '2560px'
};
  
export const device = {
    iPhone: `(min-width: ${size.iPhone})`,
    mobile: `(min-width: ${size.mobile})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
};
    
export const NavbarContainer = styled.nav`
    
    @media ${device.iPhone} {
        position: fixed;
        bottom: 50px;
        left: 36%;
        display: flex;
        justify-content: center;            
    }

    @media ${device.mobile} { 
        position: fixed;
        bottom: 50px;
        left: 36%;
        display: flex;
        justify-content: center;
    }
        
    @media ${device.laptop} { 
        display: flex;
        justify-content: space-between;
        max-width: auto;
        position: fixed;
        top: 0;
    }
        
    @media ${device.desktop} {
        display: flex;
        justify-content: space-between;
        max-width: 1400px;
        position: fixed;
        top: 0;
    }
`;

export const TitleContainer = styled.div`
        
    @media ${device.iPhone} {
        display: none;
    }
    
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
    }
            
    @media ${device.desktop} {
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
    }
        
`;
    
export const ButtonCart = styled.button`
    
    @media ${device.iPhone} {
        display: flex;
        flex-direction: row;
        padding: 5px 30px 5px; 30px;
        background: linear-gradient(to bottom right, #0dcaf0, rgb(229, 229, 229));
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        border: 2px solid ${props => 
            props.borderColor || '#3498db'
        };
        border-radius: 6px;
    }

    @media ${device.mobile} {
        display: flex;
        flex-direction: row;
        padding: 5px 30px 5px; 30px;
        background: linear-gradient(to bottom right, #0dcaf0, rgb(229, 229, 229));
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        border: 2px solid ${props => 
            props.borderColor || '#3498db'
        };
        border-radius: 6px;

        &:hover {
            color: rgba(50, 50, 50); 
            background: linear-gradient(to bottom right, #797979, #0CB0D1); 
            border: 2px solid ${props => 
                props.borderColor || 'rgb(128, 128, 128)'
            };
        }

    @media ${device.laptop} {
        max-width: 500px;
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
    @media ${device.iPhone} {
        display: none;
    }

    @media ${device.mobile} {
      display: none;
    }
  
    @media ${device.laptop} {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    }
    
    @media ${device.desktop} {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const Icon = styled.h5`
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;
  
export const CartCount =styled.h5`
    display: flex;
    padding-left: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;
