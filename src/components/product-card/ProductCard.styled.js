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

/*Store.jsx*/
export const ProductsListContainer =styled.div`
    display: flex;    
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #f0f0f0;
    padding-top: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    @media ${device.iPhone} {
        justify-content: center;
        
        li {
            margin: 10px;
            height: 450px;
            list-style-type: none;
            margin-bottom: 70px
        };
    };

    @media ${device.mobile} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        
        li {
            margin: 10px;            
            height: 450px;
            list-style-type: none;
            margin-bottom: 70px
        };
    };

    @media ${device.laptop} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        
        li {
            margin: 10x;
            list-style-type: none;
        };
    };
`;

/*ProductCard.js*/
export const ListedProductCard = styled.div`    
    @media ${device.iPhone} {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 15px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    @media ${device.mobile} {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 30px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    @media ${device.laptop} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 12px;
        width: 350px;
        padding: 0px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
        
    @media ${device.desktop} {
            
    }
`;


export const ImageContainer = styled.div`
    @media ${device.iPhone} {

    }
        
    @media ${device.mobile} {

    }

    @media ${device.laptop} { 
        display: flex;
        justify-content: center;
    }
        
    @media ${device.desktop} {
        display: flex;
        justify-content: center;
    }
`;

export const ProductImage = styled.img`
        
    @media ${device.iPhone} {
        display: flex;
        justify-content: center;
        Max-width: 130px;
        Height: auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    @media ${device.mobile} {
        display: flex;
        justify-content: center;
        Max-width: 130px;
        Height: auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    @media ${device.laptop} {
        display: flex;
        justify-content: center;
        height: 200px;
        width: 160px;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
    }
    
    @media ${device.desktop} {
        
    }
    `;
    
    export const Forum = styled.div`
    @media ${device.iPhone} {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    
    @media ${device.mobile} {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    
    @media ${device.laptop} { 
        display: flex;
        justify-content: center;
        flex-direction: row;
        padding: 20px 15px 0px 15px;
    }
    
    @media ${device.desktop} {
        display: flex;
        justify-content: center;
        flex-direction: row;
        padding: 20px 15px 0px 15px;
    }
`;

export const InfoContainer = styled.div`
    
        @media ${device.iPhone} {
            display: flex;
            flex-direction: column;
            justify-content: start;
            padding-top: 20px
        }
            
        @media ${device.mobile} {
            display: flex;
            flex-direction: column;
            justify-content: start;
            padding-top: 20px
    
        }
    
        @media ${device.laptop} { 
            display: flex;
            flex-direction: column;
            padding-top: 17px;
            width: 170px;
            justify-content: start;

        }
            
        @media ${device.desktop} {
    
        }
    `;

export const ProductTitle = styled.h2`

    @media ${device.iPhone} {
        font-family: "Prompt", sans-serif;
        font-weight: 600;
        font-style: normal; 
    }
        
    @media ${device.mobile} {
        font-family: "Prompt", sans-serif;
        font-weight: 600;
        font-style: normal;    
    }

    @media ${device.laptop} { 
        font-family: "Prompt", sans-serif;
        font-weight: 600;
        font-style: normal;
    }
        
    @media ${device.desktop} {
        font-family: "Prompt", sans-serif;
        font-weight: 600;
        font-style: normal;
    }
`;
    export const ProductPrice = styled.h1`
        @media ${device.iPhone} {
            font-family: "Prompt", sans-serif;
            font-weight: 700;
            font-style: normal;
        }
            
        @media ${device.mobile} {
            font-family: "Prompt", sans-serif;
            font-weight: 700;
            font-style: normal;    
        }
    
        @media ${device.laptop} { 
            font-family: "Prompt", sans-serif;
            font-weight: 600;
            font-style: normal;        
        }
            
        @media ${device.desktop} {
            font-family: "Prompt", sans-serif;
            font-weight: 600;
            font-style: normal;    
        }
    `;
    export const ButtonContainer = styled.div`
        @media ${device.iPhone} {
            display: flex;
            flex-direction: column;
            margin-top: 20px; 
        }
            
        @media ${device.mobile} {
            display: flex;
            flex-direction: column;
            margin-top: 20px;    
        }
    
        @media ${device.laptop} {
            display: flex;
            flex-direction: column;
            width: 130px;
            margin-top: 20px; 
        }
            
        @media ${device.desktop} {
    
        }
    `;

    export const Button = styled.button`
        max-width: 130px;
        height: 35px;
        margin-bottom: 15px;
        border-radius: 8px;
        font-family: "Prompt", sans-serif;
        font-weight: 700;
        font-style: normal;    
        color: white;
        background: linear-gradient(to bottom right, blue, purple);

        &:hover {
            color: rgba(191, 194, 195); 
            background: linear-gradient(to top left, blue, purple); /* Change the background color on hover */
        }

        @media ${device.iPhone} {
         
        }
            
        @media ${device.mobile} {
    
        }
    
        @media ${device.laptop} { 
        }
            
        @media ${device.desktop} {
    
        }
    `;