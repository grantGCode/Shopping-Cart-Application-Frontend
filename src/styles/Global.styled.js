import styled from 'styled-components';

export const GlobalStyledContainer = styled.div`

    background-color: #f5f5f5;
    
    .footer {
        background-color: black;
        background-image: url('./images/ivan-jevtic-cutout.png');
        background-size: cover;
        font-family: "Libre", sans-serif;
        height: 240px;
        padding: 40px;
        color: white;
    }

    .footer-title {
        font-size: 18px;
    }

    .footer-description {
        padding-top: 10px;
        font-size: 10px;
    }

    .footer-copyright {
        font-size: 10px;
    }
`

export default GlobalStyledContainer;