import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { userContext } from "../userState/StateComponent";

const PrivateRoute = ({ children, redirectTo = "/" }) => {

    const { usuario } = useContext(userContext);

    if(!usuario.role.includes("user")){

        return <Navigate to={redirectTo} />;
    }

    return children
  
}

export default PrivateRoute