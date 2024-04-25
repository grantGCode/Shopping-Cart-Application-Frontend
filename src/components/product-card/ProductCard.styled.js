import styled from "styled-components";

const size = {
    mobile:'375px',
    desktop: '1024px',
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    desktop: `(min-width: ${size.desktop})`,
};

export const ListedProductCard = styled.div`
    // border: 2px solid blue;
    display: flex;
    margin: 20px;
    // border:  solid #f5f5f5;
    font-family: "Poppins", sans-serif; 
    
    .product-title{
        display: flex;
        justify-content: center;
        color: black;
        font-weight: 500;
        font-style: normal;
    }
    
    @media ${device.mobile} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        
        .image-container {
            width: 500px;
        }
        
        .product-image {
            border: 2x solid red;
            width: 50%;
            height: 50%;
            object-fit: contain;
            border-radius: 6px;    
        }
        
        .info-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 10px;
        }
        
        .product-price{
            display: flex;
            justify-content: center;
            font-weight: 500;
            font-style: normal;
        }
        
        .button-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
        }
        
        .add {
            margin: 10px 0px 10px 0px; 
            padding: 10px 30px 10px 30px;
            border: .5px solid grey;
            color: white;
            background: linear-gradient(to bottom right,  #00BFFF, #00E0FF 37%, pink);
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);            
            
            &:hover {
                color: rgba(191, 194, 195);
                border-color: black; 
                background: linear-gradient(to bottom right,  #D38DA8 15%, #00C2DD, #00A4DB);
                
            }
        }
        
        .remove {
            margin: 10px; 
            padding: 10px 30px 10px 30px;
            border: .5px solid grey;
            color: white;
            background: linear-gradient(to bottom right,  #00BFFF, #00E0FF 37%, pink);
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);            
            
            &:hover {
                color: rgba(191, 194, 195);
                border-color: black; 
                background: linear-gradient(to bottom right,  #D38DA8 15%, #00C2DD, #00A4DB);
                
            }
        }
    }
    
    @media ${device.desktop} {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding 0px;
        width: 600px;
        height: 500px;
        background: white;

        .image-container {
            width: auto;
            padding: 0px 20px 0px 0px;
        }    
        
        .product-image {
            width: 150px;
            height: 250px;
            border-radius: 6px;    
        }

        .info-container {
            display: flex;
            flex-direction: column;
            align-items: start;
            margin-top: 10px;
        }
  
        
        .product-price{
            display: flex;
            justify-content: center;
            font-weight: 700;
            font-style: normal;
        }
        
        .button-container {
            display: flex;
            flex-direction: column;
            width: 80%;
        }

        .add {
            margin: 40px
            padding: 10px 40px 10px 40px;
            border: .5px solid grey;
            color: white;
            background: linear-gradient(to bottom right,  #00BFFF, #00E0FF 37%, pink);
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            
            &:hover {
                color: rgba(191, 194, 195);
                border-color: black; 
                background: linear-gradient(to bottom right,  #D38DA8 15%, #00C2DD, #00A4DB);

            }
        }
        
        .remove {
            margin: 15px 0px 5px 0px; 
            padding: 10px 30px 10px 30px;
            border: .5px solid grey;
            color: white;
            background: linear-gradient(to bottom right,  #00BFFF, #00E0FF 37%, pink);
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            
            &:hover {
                color: rgba(191, 194, 195);
                border-color: black; 
                background: linear-gradient(to bottom right,  #D38DA8 15%, #00C2DD, #00A4DB);
            }
    }
`;