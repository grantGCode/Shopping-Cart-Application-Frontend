/* Components data, and Contexts */
import Navbar from '../components/NavBar.js'
import ProductCard from '../components/ProductCard.js'
import { products } from '../productStore.js'
import { useShoppingCartContext } from '../CartContext.js'
/* Styled Components */
import { RemoveButton } from '../components/styles/Container.styled.js'
import { ProductsListContainer } from '../components/styles/ProductCard.styled.js'

 

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
