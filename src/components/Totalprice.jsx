function Totalprice ({checkouttotal}){
    return(
        <>
        <div className="wrapper container px-3 ">
        <div className="ttl-price">
        <div className="ttl-price-container flex flex-wrap justify-around items-center my-1 " >
                   
                    <div className="product-info flex flex-col  ">
                        <h4 className="font-bold py-3">Total Checkout</h4>
                      
                    </div>


                    <div className="total-price flex flex-col items-center">
                        <h6 className="font-bold checkout-btn">$ {parseFloat(checkouttotal.toFixed(2))}</h6>
                    </div>

                    </div>
                    </div>
        </div>
        </>
    )
}

export default Totalprice