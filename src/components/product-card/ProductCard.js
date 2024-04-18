import { ShoppingCartContext, addOneToCart, removeOneItem } from '../../CartContext.js'
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { 
  ListedProductCard,
} from './ProductCard.styled.js';

function ProductCard({product}) {
  const cartContext = useContext(ShoppingCartContext);
  
  const add = () => {
    cartContext.addOneToCart(product);
    toast.info('Added to cart');
  }

  const remove = () => {
    cartContext.removeOneItem(product);
    toast.info('Removed from cart');
  }

  return (
    <ListedProductCard>
      <div class="image-container">
        <img 
          class="product-image"
          src="/images/imageShrit.jpg" 
          alt="image unavailable" 
        />
      </div>
      <div class="forum">
        <div class="info-container">
          <h1 class="product-title">Product Title</h1>
          <p class="product-price">$Product Price</p>    
        </div>
        <div class="button-container">
          <button className='add' onClick={add}> + Add </button>
          <button className='remove' onClick={remove}> - Remove</button>
        </div>
      </div>
    </ListedProductCard>
  )
}

export default ProductCard
