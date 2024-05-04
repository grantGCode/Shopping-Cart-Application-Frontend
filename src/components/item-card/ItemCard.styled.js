import styled from "styled-components";


const size = {
    desktop: '1440px',
}

export const device = {

    desktop: `(min-width: ${size.desktop})`,
};

export const Form = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: "Poppins", sans-serif;

    .card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: #00161E;
        margin-bottom: 10px;
    }

    .info {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .title {
        font-size: 1em;
        font-style: normal;
        color: #FFFFFF;
    }

    .quantity {
        font-size: 1em;
        font-style: normal;
        color: #FFFFFF;
    }

    .remove-button {
        font-size: 1em;
        font-style: normal;    
        height: 40px;
        color: rgba(247, 247, 247, 1);
        background-color: transparent;
        border-color: #BB2728;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
`;