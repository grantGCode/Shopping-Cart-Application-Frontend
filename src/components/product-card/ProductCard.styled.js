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

/*ProductCard.js*/
export const ListedProductCard = styled.div`
    border: 1px solid #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 20px;
    
    .image-container {
        width: 50%;
    }

    .product-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .button-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    
    .add, .remove {
        padding: 10px;
        border: .5px solid grey;
        background-color: #f5f5f5;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin: 10px;   
    }
        
    @media ${device.desktop} {
    
    }
`;