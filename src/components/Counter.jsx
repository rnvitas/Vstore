
function Counter ({count,decrement,increment}){
  

    return (
        <>
           <div className="counter-products flex justify-center items-center gap-4" >
                    <button className="decrement" onClick={decrement}>-</button>
                    <span>{count}</span>
                    <div className="increment" onClick={increment}>+</div>
                    </div>
        </>
    )
}

export default Counter