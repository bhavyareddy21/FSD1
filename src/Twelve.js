import { useState } from "react";
function Twelve(){
    const [review,setReview] = useState('');
    const [reviewToDisplay,setDisplay] = useState('');
    const addReview = () => {
        console.log("Adding review...");
        setDisplay(review);
    }
    const inputValueChange = (event) => {
        console.log(event.target.value);
        setReview(event.target.value);
    }
    return(
        <div>
            <input type="text" placeholder = "Enter a review" onChange={inputValueChange}></input>
            <button type="button" className="btn btn-outline-success" onClick ={addReview} >Submit</button>
            <p>{reviewToDisplay}</p>

        </div>
    )

}
export default Twelve 