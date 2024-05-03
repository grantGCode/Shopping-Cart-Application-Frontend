import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyledContainer } from './styles/Global.styled.js'
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

function App() {
  return (
    <GlobalStyledContainer>
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
                    <h3 className='footer-title'>Pulchra Rosa</h3>
                    <p className='footer-description'>{loremText}</p>
                    <span className='footer-copyright'>© Copyright 2024 . Rights Reserved</span>
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
