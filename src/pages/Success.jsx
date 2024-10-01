import { SuccessStyledContainer} from '../styles/Success.styled.js';


function success() {
  return (
    <SuccessStyledContainer>
      <h2 className='header-two'>You're <span className='red'>All</span></h2> <h2 className='header-two'>Set!</h2>
      <h2 className='header-two'><i className='skinny'>Thank You!</i>.</h2>
      <p className='header-description'>
        Please be so kind enough to let us know what 
        you think once your new jacket arrives. 
      </p>
      <p className='header-description'>
        You will get an email from our team 
        <span className='red'> two weeks </span> 
        after your order has been delivered. 
      </p>
      <p className='header-description'>
        We Appreciate Your Feedback!
      </p>
      <p></p>
      <button className='cta-button'>Return To Store</button>
      <div className="store-container">
        <div className='bottom-image-container'>
          <img alt='girl-alt-logo' src='./images/aiony-haust-cutout-mobile.png'></img>
        </div> 
      </div>
    </SuccessStyledContainer>
  )
}

export default success
