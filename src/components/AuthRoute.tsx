import React, {PropsWithChildren, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import LoadingSpinner from "./LoadingSpinner";

export interface AuthRouteProps extends PropsWithChildren{}

const AuthRoute: React.FunctionComponent<AuthRouteProps> = props => {
    const {children} = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [ loading,setLoading ] = useState(true);

    useEffect(() => {
        AuthCheck();
        navigate("/home")
        return () => AuthCheck();
    },[auth,navigate])

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user){
            setLoading(false)
        }else {
            navigate('/');
        }
    });

    if(loading) return <LoadingSpinner/>

    return (
        <>
            {children}
        </>
    );
}

export default AuthRoute;