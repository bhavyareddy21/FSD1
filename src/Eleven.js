function Eleven(){
    const inputValueChange = (event) => {
        console.log("Input Changed")
        console.log(event.target.value)
    }
    const addReview = () => {
        console.log("Adding review...")
    }
    return(
        <div>
            <input type="text" placeholder = "Enter a review" onChange={inputValueChange}></input>
            <button type="button" className="btn btn-outline-success" onClick ={addReview} >Submit</button>
        </div>
    )

}
export default Eleven;