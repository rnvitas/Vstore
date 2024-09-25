function Totalprice ({checkouttotal,id}){
    return(
        <>
        <div className="wrapper container">
        <div className="content-product flex flex-wrap justify-around items-center my-2 " key={id}>
                   
                    <div className="product-info flex flex-col  ">
                        <h4 className="font-bold py-3">Total Checkout</h4>
                      
                    </div>


                    <div className="total-price flex flex-col items-center">
                        <h6 className="font-bold checkout-btn">$ {parseFloat(checkouttotal.toFixed(2))}</h6>
                    </div>

                    </div>
        </div>
        </>
    )
}

export default Totalprice