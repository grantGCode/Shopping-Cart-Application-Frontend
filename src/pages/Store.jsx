/* Components data, and Contexts */
import Navbar from '../components/navbar/NavBar.js'
import ProductCard from '../components/product-card/ProductCard.js'
import { products } from '../productStore.js'
import { loremIpsum } from 'lorem-ipsum'
/* Styled Components */
import { 
  Info,
  BrandName,
  BrandInfo,
  DesktopContainer, 
  ProductImage 
} from '../components/Container.styled.js'
import { ProductsListContainer } from '../components/product-card/ProductCard.styled.js'

const loremText = loremIpsum({
  count: 5,
  units: 'sentences',
  format: 'plain',
});

function Store() {

  return (
    <>
      <Navbar />
      <DesktopContainer>
        <Info>
          <BrandName>good Sleep</BrandName>
          < BrandInfo>{loremText}</BrandInfo>
        </Info>
        <ProductImage 
          src='/images/twoShirtImage.jpg'
          alt='image unavailable'
        />
      </DesktopContainer>
      <ProductsListContainer>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product} // Passing individual product as prop
            />
          </li>
        ))}
      </ProductsListContainer>
    </>
  )
}

export default Store
