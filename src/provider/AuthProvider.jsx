import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const[user, setUser] = useState(null);
    ///console.log(user);

    const handleRegister = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    }

    const handleLogOut = () => {
      return signOut(auth);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
      })
      
      return () => {
        unsubscribe();
      }

    }, [])

    const authInfo = {
        user,
        setUser,
        handleRegister,
        handleLogin,
        handleLogOut
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
