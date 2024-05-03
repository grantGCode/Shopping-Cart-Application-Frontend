import Navbar from '../components/navbar/NavBar.js'
import ProductCard from '../components/product-card/ProductCard.js'
import { products } from '../productStore.js'
import { loremIpsum } from 'lorem-ipsum'
import { StoreStyledContainer} from '../styles/Store.styled.js'

const loremText = loremIpsum({
  count: 2,
  units: 'sentences',
  format: 'plain',
});

function Store() {
  return (
    <StoreStyledContainer>
      <div className='spot-light-container'>
        <div className='spot-light'>
          <h1 className='header'>Pulchra Rosa</h1>
          <h2 className='header-two'> Designed with <span className='red'>love</span>, built with <i className='skinny'>grit</i>.</h2>
          <p className='header-description'>{loremText}</p>
        </div>
      </div>
      <div className='products-container'>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard className='card'
              product={product} // Passing individual product as prop
            />
          </li>
        ))}
      </div>
      <div className='bottom-image-container'>
        <img alt='girl-alt-logo' src='./images/aiony-haust-cutout-mobile.png'></img>
      </div> 
    </StoreStyledContainer>
  )
}

export default Store