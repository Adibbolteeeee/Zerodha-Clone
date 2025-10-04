import { useEffect } from "react";
import axios from "axios";
import { handleError, handleSuccess } from "./util";
import { useNavigate } from "react-router-dom";
import Funds from "./Funds";
function Logout() {
    let navigate =useNavigate();
    useEffect(()=>{
        async function logout() {
            let URL = "http://localhost:8080/logout";
            let response = await axios.get(URL,{withCredentials:true,validateStatus: ()=> true})
            let {data, status } = response;
            console.log(data);
            console.log(status);

            if(status === 200) {
                handleSuccess(data.message);
                setTimeout(()=> {
                    window.location.href = "http://localhost:5173/";
                },5000)
            }
            else if(status === 500) {
                handleError(data.message);
                setTimeout(()=> {
                    navigate("/dashboard");
                },1000)
            }
        }

        logout();
    },[]);

    return ( 
        <Funds />
     );
}

export default Logout;