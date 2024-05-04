import styled from 'styled-components'

const size = {
    desktop: '1280px',
};

export const device = {
    desktop: `(min-width: ${size.desktop})`, 
};

export const NavbarStyledContainer = styled.nav`

    .menu-position-container {
        display: flex;
        justify-content: center;
        background-color: black;
        height: 55px;
        position: fixed;
        top: 0;
        width: 100%;
        box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);
    }

    .menu-container {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        max-width: 1280px;
        padding: 5px;
    }

    .full-name {
        font-family: "Libre-Bold", serif;
        font-size: 12px;
        color: white;
        padding-top: 10px;
    }

    .open-cart-button, .remove-button {
        border: 1px solid white;
        background-color: black;
        color: white;
        width: 100px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .remove-button {
        height: 100%;
        border: 1px solid red;
    }

    .your-cart {
        margin: 0;
        font-family: "Poppins", sans-serif;
        padding-left: 5px
    }
        
    @media ${device.desktop} { 
    }
`;