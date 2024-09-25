import { useEffect, useState } from "react";
import Cartitem from "./Cartitem";

function Cartlist ({onCartUpdate,onCheckoutUpdate}){
    const[products,setProducts]=useState([])
    const [totalItemCount, setTotalItemCount] = useState(0);
    const [totalcheckout, setTotalCheckout] = useState(0);


  useEffect(()=>{
        GetProducts()
    },[])

  useEffect(() => {
    onCartUpdate(totalItemCount);
  }, [totalItemCount,onCartUpdate]);

  useEffect(() => {
    onCheckoutUpdate(totalcheckout);
  }, [totalcheckout,onCheckoutUpdate]);


  const updateItemCount = (newCount) => {
    setTotalItemCount((state) => state + newCount);
  };

  const updateCheckout = (newCount) => {
    setTotalCheckout((state) => state + newCount);
  };


 async function GetProducts (){
    try {
        const url ="https://fakestoreapi.com/products?limit=3"
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data)
    } catch (error) {
        console.log("Data tidak ditemukan");
    }
 
 }

    return(
        <>
        <div className="wrapper container py-3 px-3" style={{
          marginTop:"6rem"
        }}>
            <div className="container-product mt-3">
            {!products.length ? <h1>....Loading</h1> :
            products.map((item) =>(
          <Cartitem product={item} key={item.id}  onCartUpdate={updateItemCount} onCheckoutUpdate={updateCheckout}/>

    ))}
            </div>


        </div>
        </>
    )
}

export default Cartlist;