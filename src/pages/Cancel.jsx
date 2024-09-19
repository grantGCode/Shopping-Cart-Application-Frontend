import { StoreStyledContainer} from '../styles/Store.styled.js'
import { loremIpsum } from 'lorem-ipsum'

const loremText = loremIpsum({
  count: 2,
  units: 'sentences',
  format: 'plain',
});
function cancel() {
  return (
    <StoreStyledContainer>
      <h2 className='header-two'>Your Order Has Been Canceled.<i className='skinny'>Thank You!</i>.</h2>
      <p className='header-description'>{loremText}</p>
      <button>Return To Store</button>
      <div className="store-container">
        <div className='bottom-image-container'>
          <img alt='girl-alt-logo' src='./images/aiony-haust-cutout-mobile.png'></img>
        </div> 
      </div>
    </StoreStyledContainer>
  )
}

export default cancel
