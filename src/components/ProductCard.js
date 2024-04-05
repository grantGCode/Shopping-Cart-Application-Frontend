import {Button, Form, Image} from 'react-bootstrap';
import { ListedProductCard } from './styles/Container.styled.js';
import { ShoppingCartContext } from '../CartContext.js'
import { useContext } from 'react';
import { toast } from 'react-toastify';

function ProductCard({product}) {
  const cartContext = useContext(ShoppingCartContext);
  return (
    <Form>
      <ListedProductCard>
        <h1 className='text-center'>{product.title}</h1>
        <Image 
          src='/images/imageShrit.jpg'
          alt='image unavailable'
          className='img-thumbnail'
        />
        {/* <Image 
          src='/images/imageShritTwo.jpg'
          alt='image unavailable'
          className='img-thumbnail'
        /> */}
        <h1>{`$${product.cost}`}</h1>    
        <Button
          className='my-5'
          variant="secondary" 
          size="lg" 
          onClick={() => {
            toast.info(`${product.title} added to shopping cart`);
            cartContext.addOneToCart(product);
          }}
        >
          + Add To Cart
        </Button>
        <Button
          variant="secondary" 
          size="lg"
          onClick={() => {
            toast.info(`x1 ${product.title} removed from your cart.`);
            cartContext.removeOneItem(product);
          }}
        >
          - Remove From Cart
        </Button>
      </ListedProductCard>  
    </Form>
  )
}

export default ProductCard
