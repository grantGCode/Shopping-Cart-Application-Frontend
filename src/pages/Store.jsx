import Navbar from '../components/NavBar.js'
import { products} from '../productStore.js'
import {Button} from 'react-bootstrap'
import ProductCard from '../components/ProductCard.js'
import { useShoppingCartContext } from '../CartContext.js'
 

function Store() {
  
  const {purgeShoppingCart} = useShoppingCartContext();

  return (
    <>
      <Navbar />
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                product={product} // Passing individual product as prop
              />
            </div>
          ))};
        </div>
          <Button
            size='lg'
            variant="danger" 
            onClick={purgeShoppingCart}
          >
            Remove All From Cart
          </Button>
    </>
  )
}

export default Store
