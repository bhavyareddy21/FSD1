import { useState, useEffect } from "react";

function Nine() {
    //const count = 0;
    const [count, setCount] = useState(1)
    //useState
    useEffect(()=>{
        // setCount(5);
        console.log("Use effect is called");
});
const btnUpdateCount =()=> { 
    setCount(count+2);

}
const btnDecreaseCount =()=> { 
    setCount(count-2);

}
    return(
        <div>
            <h1>Count {count}</h1>
            <button type="button" className="btn btn-primary" onClick = {btnUpdateCount}>Increment  </button>
            <br></br>
            <br></br>
            <button type="button" className="btn btn-primary" onClick = {btnDecreaseCount}>Decrement</button>

        </div>
    );
}
export default Nine