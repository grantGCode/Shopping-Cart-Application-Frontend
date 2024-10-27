import { CancelStyledContainer} from '../styles/Cancel.styled.js';
import { Link } from 'react-router-dom';

function cancel() {
  return (
    <CancelStyledContainer>
      <div className='top-image-container'>
        <img src='./images/ivan-jevtic-cutout.png' alt='unavailable'></img>
      </div>
      <div className='cancel-container'>
        <h1 className='header'>Pulchra Rosa</h1>
        <h2 className='header-two'>Your Order</h2>
        <h2 className='header-two'>Has Been Canceled.</h2>
        <h2 className='header-two'><i className='skinny'>Thank You!</i></h2>
        <p className='header-description'>
          If you did not intend to cancel your order and 
          are seeing this page <span className='red'> please </span> 
          contact our team for help.
        </p>
        <Link className='button-container' to='/'>
          <button className='cta-button'>Return To Store</button>
        </Link>
      </div>
      <div className="cancel-container">
        <div className='bottom-image-container'>
          <img alt='girl-alt-logo' src='./images/aiony-haust-cutout-mobile.png'></img>
        </div> 
      </div>
    </CancelStyledContainer>
  )
}

export default cancel
