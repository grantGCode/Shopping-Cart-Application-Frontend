import {useState} from 'react'
import { useShoppingCartContext } from '../CartContext';
import ItemCard from './ItemCard'
import { ToastContainer } from 'react-bootstrap'
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
  ModalContainer,
  ModalContent,
  ModalTitle,
  ButtonClose,
  ModalBody,
  NoItems,
  ModalFooter,
  TotalCost,
  ButtonPurchase
} from './Modal.styles'

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const CloseModal = () => setShowModal(false);
  const OpenModal = () => setShowModal(true)
  
  const {cartItemCount, Items, getTotalCost} = useShoppingCartContext()




  /* Purchase Items Button on click function*/
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
            onClick={OpenModal}
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
          <ModalContainer showModal={setShowModal}>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>
                  Your Shopping Cart
                </ModalTitle>
                <ButtonClose  
                  onClick={CloseModal}
                >
                  X
                </ButtonClose>
              </ModalHeader>                    
              <ModalBody>
                {Items.length === 0 ? (
                  <NoItems>There are no items in your shopping cart.</NoItems>
                  ) : Items.map((item) => 
                    ( <div> 
                      <ItemCard                   
                        className="border border-primary"
                        key={Items.id}
                        item={item}
                      />  
                    </div> ))
                  }
                </ModalBody>    
                <ModalFooter>
                  <TotalCost>
                    {`Total: $${getTotalCost()}`}
                  </TotalCost>
                  <ButtonPurchase 
                    onClick={() => {
                      toast.success('Possessing your order.');
                      buyCartContent();
                    }}
                  >
                    Purchase Items
                  </ButtonPurchase>
              </ModalFooter>
            </ModalContent>
          </ModalContainer>
      </NavbarContainer>
      <ToastContainer />
    </div>
  )
}

