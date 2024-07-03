import { Navigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import { userContext } from "../userState/StateComponent";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, redirectTo = "/" }) => {

    const { userData } = useContext(userContext);

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    if (userData.role.includes("admin") || userData.role.includes("superadmin")) {
        return children;
    }

    return <Navigate to={redirectTo} />

}

export default PrivateRoute