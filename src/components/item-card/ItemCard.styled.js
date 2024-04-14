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

export const Form = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 2px solid gray;
    margin-bottom: 6px;
    padding: 5px

`;

export const Info = styled.div`
    @media ${device.iphone} {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media ${device.mobile} {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding-left: 10px;
        padding-right: 40px;
    }
`;

export const Title = styled.h3`
    font-family: "Prompt", sans-serif;
    font-weight: 700;
    font-style: normal;
`;

export const Quantity = styled.h5`
    font-family: "Prompt", sans-serif;
    font-weight: 700;
    font-style: normal;
`;

export const RemoveButton = styled.button`
    @media ${device.iPhone} {
        width: 180px;
        height: 40px;
        border-radius: 8px;
        font-family: "Prompt", sans-serif;
        font-weight: 700;
        font-style: normal;    
        color: rgba(247, 247, 247, 1);
        background-color: rgb(180, 180, 180);
        border-color: rgba(63, 63, 63, 1)
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    @media ${device.mobile} {
        width: 170px;
        height: 40px;
        border-radius: 8px;
        font-family: "Prompt", sans-serif;
        font-weight: 700;
        font-style: normal;    
        color: rgba(247, 247, 247, 1);
        background-color: rgb(180, 180, 180);
        border-color: rgba(63, 63, 63, 1)
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
`;