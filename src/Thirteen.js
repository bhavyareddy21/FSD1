import {useRef} from "react"
function Thirteen(){
    const firstRef = useRef(null);

    const formSubmitted = (event)=> {
        event.preventDefault(); //prevent reload
        console.log("Form Submitted!");
        console.log(firstRef.current.value);
        firstRef.current.value=''; //clear value

    }
    return(
        <div>
            <form onSubmit={formSubmitted}>
                <input type = "text" ref={firstRef}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Thirteen