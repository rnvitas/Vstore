import { useState } from 'react';
import './App.css'
import Cartlist from './components/Cartlist'
import Navigation from './components/Navigation'
import Totalprice from './components/Totalprice';


function App() {
  
  const [countercart, setCountercart] = useState(0);
  const [checkout, setCheckout] = useState(0);

    const updateCartCount = (newCount) => {
        setCountercart(newCount);
    };

    const updateCheckout = (newCount) => {
      setCheckout(newCount);
  };
;

  return (
    <>
     <Navigation countcart={countercart} />
     <Cartlist  onCartUpdate={updateCartCount} onCheckoutUpdate={updateCheckout}  />

     <Totalprice checkouttotal={checkout}/>
    </>
  )
}

export default App
