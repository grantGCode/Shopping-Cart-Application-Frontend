import { ShoppingCartContext } from '../../CartContext.js'
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { 
  ListedProductCard,
  ImageContainer, 
  ProductImage, 
  InfoContainer, 
  ProductTitle, 
  ProductPrice,
  Forum, 
  Button, 
  ButtonContainer
} from './ProductCard.styled.js';

function ProductCard({product}) {
  const cartContext = useContext(ShoppingCartContext);
  return (
    <ListedProductCard>
      <ImageContainer>
        <ProductImage 
          src='/images/imageShrit.jpg'
          alt='image unavailable'
        />
      </ImageContainer>
    <Forum>
      <InfoContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{`$${product.cost}`}</ProductPrice>    
      </InfoContainer>
        <ButtonContainer>
          <Button 
            onClick={() => {
              toast.info(`${product.title} added to shopping cart`);
              cartContext.addOneToCart(product);
            }}
          >
            + Add
          </Button>
          <Button
            onClick={() => {
              toast.info(`x1 ${product.title} removed from your cart.`);
              cartContext.removeOneItem(product);
            }}
            >
              - Remove
          </Button>
        </ButtonContainer>
      </Forum>
    </ListedProductCard>
  )
}

export default ProductCard
