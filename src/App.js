import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Cancel from './pages/Cancel.jsx'
import Store from './pages/Store.jsx'
import Success from './pages/Success.jsx'
import { CartProvider } from './CartContext.js'
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './components/styles/Global.js' 


function App() {
  return (
    <CartProvider>
      <GlobalStyles />
        <Router>
          <Routes>
            <Route 
              exact path='/' 
              element={
                <Store />
              }
            ></Route>  
            <Route path='/success' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
          </Routes>
        </Router>
        <ToastContainer />
    </CartProvider>
  );
}

export default App;
