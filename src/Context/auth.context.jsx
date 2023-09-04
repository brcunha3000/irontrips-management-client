import { useState, useEffect, createContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";
const AuthContext = createContext();

function AuthProviderWrapper(props){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    function storeToken(token) {
        localStorage.setItem("authToken", token);
    }

    function authenticateUser() {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
            axios
                .get(`${API_URL}/auth/verify`, {headers: {Authorization: `Bearer ${storedToken}`}})
                .then((response) => {
                    const user = response.data;
                    setIsLoggedIn(true);
                    setIsLoading(false);
                    setUser(user);
                })
                .catch(() => {
                    setIsLoggedIn(false);
                    setIsLoading(false);
                    setUser(null);
                })
        } else {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);
        }
    }

    const removeToken = () => {
        localStorage.removeItem("authToken");
    }

    const logOutUser = () => {
        removeToken();
        authenticateUser();
    }

    useEffect(()=> {
        authenticateUser();
    },[]);


    return(
        <AuthContext.Provider value={{isLoggedIn, isLoading, user, storeToken, authenticateUser, removeToken, logOutUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthProviderWrapper, AuthContext};