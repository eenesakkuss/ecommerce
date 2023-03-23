
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute ({children}){

    const {loggedIn} = useAuth();
    
    // if(user.user && user.user.role !== "admin"){
    //     console.log()
    //     return redirect("/")
    // }
   
    return loggedIn ? children : <Navigate to="/"/>
    
}

export default ProtectedRoute;