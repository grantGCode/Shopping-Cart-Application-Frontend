import { useContext } from 'react';
import { toast } from 'react-toastify';
import { loremIpsum } from 'lorem-ipsum';
import { ShoppingCartContext } from '../../CartContext.js'
import { ProductCardStyles } from './ProductCard.styled.js';
import { useState } from 'react';

function ProductCard({product}) {
  const cartContext = useContext(ShoppingCartContext);

  const loremText = loremIpsum({
    count: 1,
    units: 'sentences',
    format: 'plain',
  });
  
  const add = () => {
    cartContext.addOneToCart(product);
    toast.info('Added to cart');
  }

  const remove = () => {
    cartContext.removeOneItem(product);
    toast.info('Removed from cart');
  }

  const [showCartButtons, setShowCartButtons] = useState(false)

  const renderButtons = () => showCartButtons ? setShowCartButtons(false) : setShowCartButtons(true);

  return (
      <ProductCardStyles>
      <div className='image-container'>
        <img 
          className='product-image'
          src={product.img} 
          alt='unavailable' 
        />
      </div>
      <div className='forum'>
        <div className='info-container'>
          <h1 className='product-title'>{product.title}</h1>
          <p className='designer-title'>Designed by Rosa</p>
          <div className="description-container">
            <p className='description-text'>{loremText}</p>
          </div>
          <h5 className='product-price'>{`$${product.cost}`}</h5>    
        </div>
        <div className='button-container'>
          {!showCartButtons && <button onClick={renderButtons} className='cta-button'>Purchase</button>}
          {showCartButtons ? (<>
            <button onClick={add} className='add'>Add to Cart</button>
            <button onClick={remove} className='remove'>Remove from Cart</button>
            <div onClick={renderButtons} className='close-out-x'>x</div>
          </>) : null}
        </div> 
      </div>
      </ProductCardStyles>
  )
}

export default ProductCard