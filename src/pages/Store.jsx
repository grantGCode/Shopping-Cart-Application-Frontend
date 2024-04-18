/* Components data, and Contexts */
import Navbar from '../components/navbar/NavBar.js'
import ProductCard from '../components/product-card/ProductCard.js'
import { products } from '../productStore.js'
import { loremIpsum } from 'lorem-ipsum'
/* Styled Components */
import { StoreStyledContainer } from '../components/Container.styled.js'
import { ProductsListContainer } from '../components/product-card/ProductCard.styled.js'

const loremText = loremIpsum({
  count: 2,
  units: 'sentences',
  format: 'plain',
});

function Store() {

  return (
    <StoreStyledContainer>
      <Navbar />
      <div className='hero-containers'>
        <div className='hero'>
          <h1>good Sleep</h1>
          <p>{loremText}</p>
          <div>
            <img className="hero-image" src="/images/twoShirtImage.jpg"></img> 
          </div>
        </div>
      </div>
      <div className="products-containers">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product} // Passing individual product as prop
            />
          </li>
        ))}
      </div>
    </StoreStyledContainer>
  )
}

export default Store
