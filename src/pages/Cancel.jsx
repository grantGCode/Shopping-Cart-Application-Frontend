import { CancelStyledContainer} from '../styles/Cancel.styled.js';

function cancel() {
  return (
    <CancelStyledContainer>
      <h1 className='header'>Pulchra Rosa</h1>
      <h2 className='header-two'>Your Order Has Been Canceled.<i className='skinny'>Thank You!</i></h2>
      <p className='header-description'>
        If you did not intend to cancel your order and 
        are seeing this page <span className='red'> please </span> 
        contact our team for help.
      </p>
      <button className='cta-button'>Return To Store</button>
      <div className="store-container">
        <div className='bottom-image-container'>
          <img alt='girl-alt-logo' src='./images/aiony-haust-cutout-mobile.png'></img>
        </div> 
      </div>
    </CancelStyledContainer>
  )
}

export default cancel
