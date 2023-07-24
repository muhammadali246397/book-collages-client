import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/__firebaseConfig';

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider
const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser =(email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const resetpassword = (email)=> {
        return sendPasswordResetEmail(auth,email)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const info = {
        user,
        createUser,
        logIn,
        googleSignin,
        resetpassword,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;