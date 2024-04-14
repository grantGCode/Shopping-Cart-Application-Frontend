/* Components*/
import {useState} from 'react'
import { useShoppingCartContext } from '../../CartContext.js';
import ItemCard from '../item-card/ItemCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
/* Styling */
import { ToastContainer } from 'react-bootstrap'
import { toast } from 'react-toastify';
import {
  NavbarContainer,
  ButtonCart,
  YourCart,
  Icon,
  CartCount,
  TitleContainer
} from './Navbar.styles.js'
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
} from './Modal.styles.js'

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  //open the modal
  const openModal = () => {
    setShowModal(true);
  };
  //close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  
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
            onClick={openModal} // Open modal on button click
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
          <div>
          { showModal === false ? 
          (null) : 
          (<ModalContainer showModal={setShowModal}>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>
                  Your Shopping Cart
                </ModalTitle>
                <ButtonClose
                  onClick={closeModal} // Close modal on button click
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
          </ModalContainer>)}
          </div>
      </NavbarContainer>
      <ToastContainer />
    </div>
  )
}

