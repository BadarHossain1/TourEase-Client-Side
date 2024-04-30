import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithPopup } from "firebase/auth";
import app from "../firebaseProvider/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

import { GithubAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";





export const AuthContext = createContext(null);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();






const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const GoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    const GithubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GithubProvider)
    }


    const LoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogoutUser = () => {
        setLoading(true)
        return signOut(auth);
    }



    const UpdateProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('User changed', currentUser);
                setUser(currentUser);
                setLoading(false)
                // ...
            } else {
                // User is signed out
                console.log('User signed out');
                setLoading(false);


            }
        });

        return () => {
            unsubscribe();
        }

    }, [])



    const authInfo = {
        user, CreateUser, LoginUser, UpdateProfile, LogoutUser, GoogleLogin, GithubLogin, loading, setLoading,

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;