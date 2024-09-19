import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyledContainer, GlobalFont } from './styles/Global.styled.js'
import { CartProvider } from './CartContext.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Cancel from './pages/Cancel.jsx'
import Store from './pages/Store.jsx'
import Success from './pages/Success.jsx'
import Navbar from './components/navbar/NavBar.js'
import Footer from './components/footer/Footer.js'

import 'bootstrap/dist/css/bootstrap.min.css'

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
                  <Navbar />
                  <Store />
                  <Footer />
                </>
              }
            ></Route>  
            <Route path='/success' 
              element={
                <>
                  <Success />
                  <Footer />
                </>
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
