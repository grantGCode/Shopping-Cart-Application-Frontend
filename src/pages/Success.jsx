import { SuccessStyledContainer} from '../styles/Success.styled.js';


function success() {
  return (
    <SuccessStyledContainer>
      <h2 className='header-two'>You're <span className='red'>All</span></h2> <h2 className='header-two'>Set!</h2>
      <h2 className='header-two'><i className='skinny'>Thank You!</i>.</h2>
      {/* <p className='header-description'>{loremText}</p> */}
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
