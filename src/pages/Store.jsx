/* Components data, and Contexts */
import Navbar from '../components/navbar/NavBar.js'
import ProductCard from '../components/product-card/ProductCard.js'
import { products } from '../productStore.js'
import { useShoppingCartContext } from '../CartContext.js'
/* Styled Components */
import { RemoveButton } from '../components/Container.styled.js'
import { ProductsListContainer } from '../components/product-card/ProductCard.styled.js'

 

function Store() {
  
  const {purgeShoppingCart} = useShoppingCartContext();

  return (
    <>
      <Navbar />
      <ProductsListContainer>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product} // Passing individual product as prop
            />
          </li>
        ))}
      </ProductsListContainer>
        <RemoveButton 
          onClick={purgeShoppingCart}
        >
        Remove All From Cart
      </RemoveButton>
    </>
  )
}

export default Store
