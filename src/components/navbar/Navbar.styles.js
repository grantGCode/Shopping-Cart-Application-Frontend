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
    position: fixed;
    
    @media ${device.iPhone} {
        bottom: 10%;
        left: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;            
        align-items: center;
        padding-bottom: 5px;
        width: 40%;
        background: none;
    }

    @media ${device.mobile} { 
        bottom: 10%;
        left: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: none;
    }
        
    @media ${device.laptop} { 
        top: 0;
        left: 0%;
        display: flex;
        flex-direction: row;
        justify-content: end;
        width: 100%;
        height: 39px;
        background-color: rgba(200, 200, 200, 0.75);
        border-radius: 2px;
    }
    
    @media ${device.desktop}  
        top: 0;
        left: 0%;
        display: flex;
        flex-direction: row;
        justify-content: end;
        width: 100%;
        height: 37px;
        position: fixed;    
        background-color: rgba(200, 200, 200, 0.75);
        border-radius: 2px;
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
        display: flex;
        padding-left: 30px;
        position: fixed;
        left: 0;
        color: black;
        
        h1 {
            display: flex;
            align-items: center;
            margin-bottom: 0px;
            font-size: 23px;
        }
        
        p {
            display: flex;
            margin-top: 15px;
            margin-bottom: 0px;
            padding-left: 15px;
            font-size: 15px;
            font-style: italic;
        }
    }
    
    @media ${device.desktop} { 
        display: block;
        display: flex;
        position: fixed;
        left: 0;
        color: black;
        
        h1 {
            display: flex;
            align-items: center;
            margin-bottom: 0px;
            font-size: 30px;
        }
        
        p {
            display: flex;
            margin-top: 15px;
            margin-bottom: 0px;
            padding-left: 15px;
            font-size: 15px;
            font-style: italic;
        }
    }
 `;
    
export const ButtonCart = styled.button`
    @media ${device.iPhone} {
        display: flex;
        align-items:center;
        padding: 0px 48px 0px 48px;
        height: 34px;
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
        align-items: center;
        padding: 0px 43px 0px; 43px;
        background: linear-gradient(to bottom right, #0dcaf0, rgb(229, 229, 229));
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        border: 2px solid ${props => 
            props.borderColor || '#3498db'
        };
        border-radius: 6px;
        
        &:hover {
            padding: 0px 39px 0px; 39px;
            color: rgba(50, 50, 50); 
            background: linear-gradient(to bottom right, #797979, #0CB0D1); 
            border: 2px solid ${props => 
                props.borderColor || 'rgb(128, 128, 128)'
            };
        }
    }
    
    @media ${device.laptop} {
        display: flex;
        justify-content: start;
        align-items: center;
        color: Black;
        padding: 0px 30px 0px 30px;
        background: transparent;
        border: none;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.125);
        
        &:hover {
            color: white; 
            background: rgba(83, 83, 83, .5);
            border: none;                
        }
    }
    
    @media ${device.desktop} {
        display: flex;
        justify-content: center;
        color: Black;
        padding: 0px 30px 0px 30px;
        height: 37px;
        background: transparent;
        border: none;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.125);
        
        &:hover {
            color: white; 
            background: rgba(83, 83, 83, .5);
            border: none;                
        }    
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
        display: block;
        align-item: center;            
        margin-bottom: 0;
        padding-right: 5px;
        font-size: 15px;
    }
    
    @media ${device.desktop} {
        display: block;
        align-item: center;
        margin-bottom: 0;                    
        padding-right: 5px;
        font-size:15px;        
    }
`;
    
export const Icon = styled.h5`
    @media ${device.iPhone} {
        display: flex;
        margin-top: 10px;
        align-items: center;
        font-size: 20px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);    
    
        &hover {
            font-size: 12px;
        }
    }
    
    @media ${device.mobile} {
        display: flex;
        align-items: center;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        height: 10px
    }
    
    @media ${device.laptop} {
        align-item: center;
        font-size: 15px;
        height: 10px;
        margin-top: 10px;
    }
    
    @media ${device.desktop} {
        align-item: center;        
        font-size:15px;
        height: 10px;
    }
`;
    
export const CartCount =styled.h5`
    @media ${device.iPhone} {
        display: flex;
        align-item: center;
        margin-bottom: 0px;        
        padding-left: 5px;
        font-size:15px;        
        text-shadow: 2px rgba(0, 0, 0, 0.25);
    }

    @media ${device.mobile} {
        display: flex;
        align-item: center;
        margin-bottom: 1px;        
        padding-left: 5px;
        font-size:15px;        
        text-shadow: 2px rgba(0, 0, 0, 0.25);
    }

    @media ${device.laptop} {
        display: flex;
        align-item: center;
        margin-bottom: 1px;        
        padding-left: 5px;
        font-size:15px;        
        text-shadow: 2px rgba(0, 0, 0, 0.25);
    }
        
    @media ${device.desktop} {
        display: flex;
        align-item: center;
        margin-bottom: 1px;        
        padding-left: 5px;
        font-size:15px;        
        text-shadow: 2px rgba(0, 0, 0, 0.25);
    }
`;