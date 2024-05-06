import styled from "styled-components";

const size = {
    desktop: '1024px'
}
  
export const device = {
    desktop: `(min-width: ${size.desktop})`,
};

export const ModalContainer = styled.div`
    top: 0;
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;

    .modal-content {
        background: black;
        padding: 25px;        
        max-width: 430px;
        border: 1px solid white;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        color: #FFFFFF;
        margin-bottom: 10px;
        padding-bottom: 15px;
        border-bottom: solid 2px #FFFFFF;

    }

    .modal-title {
        font-weight: 600;
        font-style: normal;
        font-size: 1.75em;
    }

    .close-modal{
        color: #FFFFFF;
        background-color: transparent;
        border-color: transparent;
        font-weight: 300;
        font-size: 1.75em;
    }

    .modal-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFFFFF;
        
        margin-top: 10px;
        padding-top: 20px;
        border-top: solid 2px #FFFFFF;
    
    }

    .no-items {
        color: #FFFFFF;
    }

    .total-cost {
        display: flex;
        flex-direction: row;  
    }

    .button-purchase {
        border: 2px solid #4BEF11;
        font-size: 1.25em;
        width: 35%;
        height: 30%;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        background: transparent;
        
        &:hover {
            color: black;
            background: white; 
            border:2px solid #4BEF11;
        };
            
    }

    @media ${device.desktop} {
        
        .close-modal {
            font-weight: 700;
            font-size: 2em;
        }    
    }
`;