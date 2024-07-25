import {useEffect, useRef, useState} from "react"
function Login(){
    const collegeIdRef = useRef(null);
    const passwordRef = useRef(null);
    const[logMessage, setMessage] = useState(''); 
    //use effect to focus on input field
    useEffect(()=>{
        collegeIdRef.current.focus();
    })
    const formSubmitted = (event)=> {
        event.preventDefault(); //prevent reload
        if(collegeIdRef.current.value === passwordRef.current.value){
            console.log("Correct");
            setMessage("Correct");
        }
        else{
            console.log("Incorrect");
            setMessage("Incorrect");
        }

    }
    return(
        <div className="container" style={{width:'300px',padding:'20px'}}>
            <form onSubmit={formSubmitted}
                style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <h1>Login</h1>
                <h7>Enter your details to login</h7>
                <br></br>
                <h6>college id</h6>
                <input type = "text" ref={collegeIdRef} placeholder="College id"/>
                <h6>password</h6>
                <input type = "password" ref={passwordRef} placeholder="Password"/>
                <button>Login</button>

                <p>{logMessage}</p>
            </form>
        </div>
    )
}
export default Login;