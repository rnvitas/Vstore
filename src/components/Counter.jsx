
function Counter ({count,decrement,increment,id}){
  

    return (
        <>
           <div className="counter-products flex justify-center items-center gap-4" key={id}>
                    <button className="decrement" onClick={decrement}>-</button>
                    <span>{count}</span>
                    <div className="increment" onClick={increment}>+</div>
                    </div>
        </>
    )
}

export default Counter