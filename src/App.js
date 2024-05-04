import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyledContainer, GlobalFont } from './styles/Global.styled.js'
import { CartProvider } from './CartContext.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Cancel from './pages/Cancel.jsx'
import Store from './pages/Store.jsx'
import Success from './pages/Success.jsx'
import Navbar from './components/navbar/NavBar.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import { loremIpsum } from 'lorem-ipsum'

const loremText = loremIpsum({
  count: 2,
  units: 'sentences',
  format: 'plain',
});

const Footer = (text) => {
  return (
    <div className='footer'>
      <div className='footer-container-1'>
        <h3 className='footer-title'>Pulchra Rosa</h3>
        <p className='footer-description'>{text}</p>
      </div>
      <div className='footer-container-2'>
        <span className='footer-copyright'>© Copyright 2024 . Rights Reserved</span>
      </div>
      <div className='footer-container-3'>
        <img className='footer-logo' src='./images/footer-logo.svg' alt='footer-logo'></img>
      </div>
    </div>
  )
}

function App() {
  return (
    <GlobalStyledContainer>
      <GlobalFont />
      <CartProvider>
        <Router>
          <Routes>
            <Route 
              exact path='/' 
              element={
                <>
                  {/* <Navbar /> */}
                  <Store />
                  <div className='footer'>
                    <div className='footer-position-container'>
                      <div className='footer-container-1'>
                        <h3 className='footer-title'>Pulchra Rosa</h3>
                        <p className='footer-description'>{loremText}</p>
                      </div>
                      <div className='footer-container-2'>
                        <span className='footer-copyright'>© Copyright 2024 . Rights Reserved</span>
                      </div>
                      <div className='footer-container-3'>
                        <img className='footer-logo' src='./images/footer-logo.svg' alt='footer-logo'></img>
                      </div>
                    </div>
                  </div>
                </>
              }
            ></Route>  
            <Route path='/success' element={
              <Success />
            }/>
            <Route path='/cancel' element={<Cancel />} />
          </Routes>
        </Router>
      <ToastContainer />
      </CartProvider>
    </ GlobalStyledContainer>
  );
}

export default App;
