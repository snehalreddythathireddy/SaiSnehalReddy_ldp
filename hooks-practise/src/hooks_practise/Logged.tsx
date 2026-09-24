import { useState } from "react";

const Logged_State=()=>{
    const[isLoggedIn,setLogged] = useState<boolean>(false);

    const checkLogin=()=>{
        setLogged(!isLoggedIn);
    };

    
    return(
        <div>
            <h2>{isLoggedIn? "Logged In" : "Please Login"}</h2>
            <button onClick={checkLogin}>Login/Logout</button>
        </div>
    );
};
export default Logged_State;