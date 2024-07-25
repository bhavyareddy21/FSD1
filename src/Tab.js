import Login from "./Login"
import Register from "./Register"
import {useState} from 'react'
function Tab(){
    const [page, setPage] = useState('Login');
    return(
        <div>
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link " onClick={'Login'} >Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick = {'Register'}>Register</a>
                </li>
            </ul>
            {page === 'Login' ? <Login/> : <Register/>}
        </div>
    )

}
export default Tab