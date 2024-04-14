import styled from "styled-components";

const size = {
    mobile:'425px',
    laptop: '1024px',
    desktop: '2560px'
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
};

export const ModalContainer = styled.div`

    @media ${device.iPhone} {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media ${device.mobile} {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const ModalContent = styled.div`
    background: #fff;
    padding: 25px;
    border-radius: 14px;
`;

export const ModalHeader =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 10px;
    padding-bottom: 15px; 
    border-bottom: solid 1px gray;
`;

export const ButtonClose = styled.button`
    background-color: transparent;
    border-color: transparent;
    font-weight: 500;
    font-style: bold;
    font-size: 1.5em;
`;

export const ModalTitle = styled.div`
    font-family: "Prompt", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1.75em;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding-top: 20px;
    border-top: solid 1px gray;
`;


export const ModalBody = styled.div`
`;

export const NoItems = styled.div`
    @media ${device.iPhone} {

    }

    @media ${device.mobile} {
        padding: 25px;
    }
`;

export const TotalCost = styled.h2`
    display: flex;
    flex-direction: row;  
`;

export const ButtonPurchase = styled.button`

    @media ${device.iPhone} {
        width: 54%;
        height: 30%;
        color: white;
        background: linear-gradient(to bottom right, #0dcaf0, rgb(229, 229, 229));
        font-size: 1.25em;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        font-family: "Prompt", sans-serif;
        border-radius: 8px;
        border: 2px solid ${props => 
            props.borderColor || 'gray'
        };

        &:hover {
            color: rgba(50, 50, 50); 
            background: linear-gradient(to bottom right, #797979, #0CB0D1); 
            border: 2px solid ${props => 
                props.borderColor || 'rgb(0, 0, 0)'
            };
        }
    }
    @media ${device.mobile} {
        width: 50%;
        height: 30%;
        color: white;
        background: linear-gradient(to bottom right, #0dcaf0, rgb(229, 229, 229));
        font-size: 1.25em;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        font-family: "Prompt", sans-serif;
        border-radius: 8px;
        border: 2px solid ${props => 
            props.borderColor || 'gray'
        };

        &:hover {
            color: rgba(50, 50, 50); 
            background: linear-gradient(to bottom right, #797979, #0CB0D1); 
            border: 2px solid ${props => 
                props.borderColor || 'rgb(0, 0, 0)'
            };
        }
    }
`;