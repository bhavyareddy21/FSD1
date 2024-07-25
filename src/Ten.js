import { useState, useEffect } from "react";

function Ten() {
    //const count = 0;
    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(500)
    //useState
    useEffect(()=>{
        // setCount(5);
        console.log("Use effect is called");
});
const btnUpdateCount =()=> { 
    setCount(count+1);
    setCount2(count2+500);

}
const btnDecreaseCount =()=> { 
    if (count > 0) {
        setCount(count - 1);
        setCount2(count2 - 500);
    }

}
    return(
        <div>
            <h1> Rs {count2}</h1>
            <button type="button" className="btn btn-primary" onClick = {btnDecreaseCount} style={{ marginRight: '10px' }}>- </button>
            {count}
            <button type="button" className="btn btn-primary" onClick = {btnUpdateCount} style={{ marginLeft: '10px' }}>+</button>
            <br></br>
            <br></br>
            <button type="button" className="btn btn-outline-success">Add to cart</button>
        </div>
    );
}
export default Ten