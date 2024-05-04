import styled from "styled-components";

const size = {
    desktop: '1280px',
}

export const device = {
    desktop: `(min-width: ${size.desktop})`,
};

export const ProductCardStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    width: 200px;

    .forum {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .image-container {
        padding-top: 15px;
        width: 200px;
        height: 315px;
        background-color: white;
    }

    .product-image {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product-title, .designer-title, .product-price, .cta-button, .add, .remove {
        font-family: "Poppins", sans-serif;
    }

    .product-title, .designer-title, .product-price {
        font-size: 14px;
        width: 100%;
        text-align: left;
    }

    .product-title {
        font-weight: 600;
        padding-top: 10px;
    }
    
    .designer-title, .product-price {
        font-weight: 400;
        letter-spacing: 1px;
    }

    .description-text {
        font-size: 10px;
        padding-right: 20px;
    }

    .button-container {
        padding-top: 10px;
        display: flex;
        justify-content: flex-start;
    }
    
    .cta-button {
        font-weight: bold;
        width: 112px;
        height: 42px;
        background-color: #BB272B;
        color: white;
        border: none;
    }

    .add, .remove {
        font-size: 10px;
        font-weight: bold;
        width: 112px;
        height: 42px;
        border: none;
        color: white;
        background-color: black;
    }

    .remove {
        margin-left: 2px;
    }
    
    .close-out-x {
        font-size: 20px;
        font-weight: 700;
        padding-left: 5px;
    }

    @media ${device.desktop} {
        margin-right: 25px;
    }

`;