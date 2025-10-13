import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.conf";
import { subscribe } from "firebase/data-connect";
import { setLogLevel } from "firebase/app";
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {

    const [user, setUser]  = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(email, password)
    }

    const logOut = (email, password)=>{
        setLogLevel(true)
        return signOut(auth)
    }




    useEffect(()=>{
       const unSubscribed =  onAuthStateChanged(auth, currentUser=>{
            setUser('current user', currentUser)
            setLoading(false)
        })
         return ()=>{


            return unSubscribed()
        
    }
    
    },[])

   
    
    const authInfo = {

        user,
        loading,
        createUser,
        signIn,
        logOut


    }



    return (
       <AuthContext.Provider value={authInfo}>
        {children}

       </AuthContext.Provider>
    );
};

export default AuthProviders;