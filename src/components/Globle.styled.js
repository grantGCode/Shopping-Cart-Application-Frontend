import styled from "styled-components";

const size = {
    mobile:'375px',
    desktop: '1024px',
    desktop_xl: '1285px',
  }
  
  export const device = {
    mobile: `(min-width: ${size.mobile})`,
    desktop: `(min-width: ${size.desktop})`,
    desktop_xl: `(min-width: ${size.desktop_xl})`,
  };

export const StoreStyledContainer = styled.div`
  //default global is mobile
  display: flex;
  flex-direction: row;
  align-items: start;
  font-family: 'Poppins', sans-serif;  
  
  .spot-light{
    background-image: url('./images/beachSunSet.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 235px;
  }
    
  .spot-light-pic{
    display: flex;
    justify-content: center;
    height: 500px;
    max-width: 375px;
    color: white
  }

  .summer {
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    font-family: 'Poppins', sans-serif;   
    font-weight: 500;
    font-style: normal;   
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style: normal;
    text-align: center;
    color: white
  }
  
  .footer {
    display: flex;
    justify-content: center;
    color: white;
    padding: 59px;
    background: black;
  }
  
  @media ${device.mobile} {

    li {
      list-style-type: none;
      justify-content: center;
    }

    .remove-button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: "Prompt", sans-serif;
      font-size:15px;
      margin-top: 20px;
      padding: 5px 31px 5px 31px;
      color: white; 
      background: red;
      border: 2px solid black;
      border-radius: 6px;
    
      &:hover {
        background: rgba(83, 83, 83, 1);
        border: 2px solid rgba(0.231, 0.231, 0.231, 1);
        border-radius: 6px;                
      }
    }
  }

  @media ${device.desktop} {
    //global
    display: flex;
    flex-direction: column;

    .spot-light {
      background-image: url('./images/beachSunSet.jpg');
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 665px;
    }
  
      .brand-spot-light {
        background-image: url('./images/goodSleep.png');
        width: 100px
      }

      .summer {
        display: flex;
        justify-content: start;
        text-align: center;
        padding-left: 70px;
        color: white;
        font-family: 'Poppins', sans-serif;   
        font-weight: 700;
        font-style: normal;   
      }
    
    p {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-style: normal;
      text-align: start;
      padding-left: 70px;
      color: white
    }

    .products-containers  {
      border: 2px solid green;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    li {
      display: flex;
      list-style-type: none;
      width: 400px;
    }

    .remove-button{
      margin: 0px 0px 0px 0px;
      padding: 5px 30px 5px 30px;
      color: black;
      font-size: 20px;
      font-weight: 700; 
      background: transparent;
      border: none;
      
      &:hover {
        color: white; 
        background: rgba(83, 83, 83, .5);
        border: none;
        border-radius: 6px;
        font-size: 15px;                
      }
    }
  }

  //global for super wide monitors
  @media ${device.desktop_xl} {
    .products-containers {
      width: 100%;
    }
  }

`;