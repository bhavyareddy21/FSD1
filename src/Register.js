import {useEffect, useRef, useState} from "react"
function Register(){
    const [collegeIdValue,setCollegeId] = useState('');
    const [passwordValue,setPassword] = useState('');
    const [emailIdValue,setemailId] = useState('');
    const [Branch,setBranch] = useState('');
    const [Year,setYear] = useState('');
    const [GenderValue,setGender] = useState('');

    const getCollegeId = (event) =>{
        setCollegeId(event.target.value)
        console.log(event.target.value);
    }

    const getpassword= (event) =>{
        setPassword(event.target.value)
        console.log(event.target.value);
    }

    const getemailId = (event) =>{
        setemailId(event.target.value)
        console.log(event.target.value);
    }

    const getBranch = (event) =>{
        setBranch(event.target.value)
        console.log(event.target.value);
    }

    const getYear = (event) =>{
        setYear(event.target.value)
        console.log(event.target.value);
    }

    const getGender = (event) =>{
        setGender(event.target.value)
        console.log(event.target.value);
    }

    const formSubmitted = (event)=> {
        event.preventDefault(); //prevent reload
        

    }

    const SubmitData = (event) =>{
        event.preventDefault();
        const obj = {
            collegeIdValue,passwordValue,emailIdValue,Branch,Year,GenderValue
        }
        console.log(obj);
    }

    return(
        <div className="container" style={{width:'300px',padding:'20px'}}>
            <form onSubmit={formSubmitted}
                style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                <h3>Register</h3>
                <h7>Enter your details to login</h7>
                <h6>college id</h6>
                <input type = "text" onChange = {getCollegeId} placeholder="College id"/>
                <h6>password</h6>
                <input type = "password" onChange = {getpassword} placeholder="Password"/>
                <h6>Email adress</h6>
                <input type = "email" onChange={getemailId}  placeholder="email adress"/>
                <h6>Branch</h6>
                <select class="form-select" value = {Branch} onChange={getBranch} >
                    <option selected>Select a branch</option>
                    <option value="AI">AI</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    </select>

                <h6>Year</h6>
                <select class="form-select" value = {Year} onChange={getYear}  >
                    <option selected>Select Year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>

                <h6>Gender</h6>
                <div style={{ display: 'flex', gap: '10px' }}>
                <input  type="radio" checked={GenderValue == "Male"}
                value = "Male" onChange={getGender}></input>Male
                <input  type="radio" checked = {GenderValue == "Female"}
                value = "Female" onChange={getGender}></input>Female
                </div>
    
                <button type="button" onClick = {SubmitData}class="btn btn-dark">Register</button>
            </form>
        </div>
    )
}
export default Register;