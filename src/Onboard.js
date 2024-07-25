import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
function Onboard(){
    const [isLogin, setIsLogin] = useState(true);
    const showLogin = ()=> {setIsLogin(true)}
    const showRegister = ()=> {setIsLogin(false)}
return (
    <div>
        <button onClick={showLogin}>Login</button>
        <button onClick={showRegister}>Register</button>
        {isLogin?
         <Login/> 
         : 
         <Register/>}
    </div>

);
}
export default Onboard;