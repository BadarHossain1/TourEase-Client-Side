import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithPopup } from "firebase/auth";
import app from "../firebaseProvider/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

import { GithubAuthProvider } from "firebase/auth";





export const AuthContext = createContext(null);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);




    const CreateUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }

    const GoogleLogin = () => {
        signInWithPopup(auth, GoogleProvider)
    }
    const GithubLogin = () => {
        signInWithPopup(auth, GithubProvider)
    }


    const LoginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    const LogoutUser = () => {
        signOut(auth);
    }



    const UpdateProfile = (displayName, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('User changed', currentUser);
                setUser(currentUser);
                // ...
            } else {
                // User is signed out
                console.log('User signed out');
            }
        });

        return () => {
            unsubscribe();
        }

    }, [])



    const authInfo = {
        user, CreateUser, LoginUser, UpdateProfile, LogoutUser, GoogleLogin, GithubLogin

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