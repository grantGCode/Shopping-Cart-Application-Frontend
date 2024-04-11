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

export const ProductsListContainer =styled.div`
  display: flex;    
  flex-wrap: wrap;
  background-color: #f0f0f0;
  padding-top: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media ${device.mobile} {
    flex-direction: row;
    justify-content: center;
    
    li {
        margin: 10px;
        height: 450px;
        list-style-type: none;
        margin-bottom: 70px
        };
    }
`;

export const ListedProductCard = styled.div`    
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


export const ProductImage = styled.img`
    display: flex;
    justify-content: center;
    Max-width: 130px;
    Height: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Forum = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 20px
`;

export const ProductTitle = styled.h2`
    font-family: "Prompt", sans-serif;
    font-weight: 600;
    font-style: normal;
`;
export const ProductPrice = styled.h1`
    font-family: "Prompt", sans-serif;
    font-weight: 700;
    font-style: normal;
`;
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const Button = styled.button`
    max-width: 130px;
    height: 35px;
    margin-bottom: 15px;
    border-radius: 8px;
    font-family: "Prompt", sans-serif;
    font-weight: 700;
    font-style: normal;    
    color: white;
    background: linear-gradient(to bottom right, blue, purple);

    &:hover {
        color: rgba(191, 194, 195); 
        background: linear-gradient(to top left, blue, purple); /* Change the background color on hover */
    }
`;