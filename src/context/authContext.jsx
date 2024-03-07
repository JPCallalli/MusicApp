import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

const AuthcontextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // El callback en onAuthStateChanged es una funcion que se ejecuta cuando el estado de autenticacion cambia
        // El control de esta funcion lo tiene firebase, es un evento que se dispara cuando el estado de autenticacion cambia
        onAuthStateChanged(auth, (userInfo) => {
            if(userInfo){
                setUser(userInfo);
            }else{
                setUser(null);
            }
        })
    }, []);

    return (<AuthContext.Provider value={{user}}>
        {children}
        </AuthContext.Provider>)
    
;}

export { AuthContext, AuthcontextProvider };