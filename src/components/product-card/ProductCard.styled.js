import styled from "styled-components";

const size = {
    mobile:'375px',
    desktop: '1024px',
    desktop_xl: '1285px',
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    desktop: `(min-width: ${size.desktop})`,
};

export const ListedProductCard = styled.div`
    //default mobile
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .product-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 25px;
        padding-top: 10px;
    }    
    
    @media ${device.desktop} {
        border: 1px solid grey;
        border-radius: 10px;
        width: 500px;
        margin: 10px;
        padding: 10px;

        .image-container {
            padding-top: 15px;
            width: 100%;
            height: 500px;
        }
        .product-image {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
        
        .forum {
            display: flex;
            flex-direction: column;
        }

        .info-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .button-container {
            display: flex;
            justify-content: center;
        }

        .add, .remove {
            margin: 10px;
            padding: 20px;
            border-radius: 10px;
            border: none;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    }

    @media ${device.desktop_xl} {
        width: 700px;
    }
`;