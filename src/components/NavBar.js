import {useState} from 'react'
import { useShoppingCartContext } from '../CartContext';
import ItemCard from './ItemCard'
import { Modal, ToastContainer} from 'react-bootstrap'
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {
  NavbarContainer, 
  ButtonCart, 
  TitleContainer,
  CartCount,
  Icon,
  YourCart 
} from './styles/Navbar.styles';
import {
  ModalHeader,
  ModalTitle,
  ButtonClose,
  ModalBody,
  ButtonPurchase
} from './Modle.styles'

export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  
  const {cartItemCount, Items, getTotalCost} = useShoppingCartContext()

  const buyCartContent = async () => {
    try {
      const response = await fetch('https://us-shopper-94591f5ffa5c.herokuapp.com',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Items)
      });

      //redirect after response
      if (response.ok) {
      const responseData = await response.json();
  
        if (responseData.url) {
          window.location.assign(responseData.url);
        }
      } else {
        toast.error('Failed to fetch:', response.status, response.statusText); 
      }
      
      //If const response should fail.
    } catch (error) {
      toast.error('An unexpected error occurred:');
      console.log(error);
    }
  };
  
  return (
    <div> 
      <NavbarContainer>        
        <TitleContainer>
          <h1>S. S. S. C.</h1>
          <p>
            {"(Secure Swift Shopper's Cart)"}
          </p>
        </TitleContainer>
          <ButtonCart  
            type='button' 
            onClick={handleShow}
          >
            <YourCart> 
              {'Your Cart '}
            </YourCart>
            <Icon> 
              <FontAwesomeIcon icon={faCartShopping} /> 
            </Icon>
            <CartCount>
              {`       (${cartItemCount})`}
            </CartCount>
          </ButtonCart>            
            <div className='display-modal'>
              <Modal align='center' className='Modal-Window' show={show} onHide={handleClose}>
                    <ModalHeader>
                      <ModalTitle>
                        Your Shopping Cart
                      </ModalTitle>
                      <ButtonClose 
                        type='button' 
                        className='Close-Modal' 
                        variant="danger" 
                        onClick={handleClose}
                      >X
                      </ButtonClose>
                    </ModalHeader>                    
                  <div className='body'>
                    <ModalBody>
                      {Items.length === 0 ? (
                        <p>There are no items in your shopping cart at this time.</p>
                        ) : Items.map((item) => 
                            (
                              <div align='center' > 
                                <ItemCard                   
                                  className="border border-primary"
                                  key={Items.id}
                                  item={item}
                                />  
                              </div>
                            ))
                          }
                      <h2 className='Total'>{`Total: $${getTotalCost()}`}</h2>
                      <ButtonPurchase 
                        className='btn mt-2'
                        variant='success'
                        onClick={() => {
                          toast.success('Possessing your order.');
                          buyCartContent();
                          }}
                      >Purchase Items
                      </ButtonPurchase>
                    </ModalBody>
                  </div>
              </Modal>
            </div> 
      </NavbarContainer>
      <ToastContainer />
    </div>
  )
}

