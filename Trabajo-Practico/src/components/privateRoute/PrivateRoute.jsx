import { Navigate } from "react-router-dom"
import { useContext } from "react";
import { userContext } from "../userState/StateComponent";

const PrivateRoute = ({ children, redirectTo = "/" }) => {

    const { userData } = useContext(userContext);
    console.log(userData);

    if (!userData.role.includes("admin")) {

        return <Navigate to={redirectTo} />;
    }

    if (!userData.role.includes("superadmin")) {

        return <Navigate to={redirectTo} />;
    }

    return children

}

export default PrivateRoute