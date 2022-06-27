import { useState, createContext, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Services/firebaseConfig";
import { Navigate } from "react-router-dom";

export const AuthLoginContext = createContext({});

export const AuthLoginProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadStorageData = () => {
      const storageUser = sessionStorage.getItem("@AuthFirebase:user");
      if (storageUser) {
        setUser(storageUser);
      }
    };
    return loadStorageData();
  });

  function signInFirebase(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user)
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
        <Navigate to="/home"/>
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
    });
  }

  function signOut() {
    sessionStorage.clear();
    setUser(null);
    return <Navigate to="/" />;
  }

  return (
    <AuthLoginContext.Provider
      value={{
        signed: !!user,
        user,
        signOut,
        signInFirebase,
      }}
    >
      {children}
    </AuthLoginContext.Provider>
  );
};