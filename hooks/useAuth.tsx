import React, { ReactNode, createContext, useContext, useState } from "react";
import { auth, provider } from "./../firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";

export interface IAuthContext {
  setGooglePopup: () => void;
}

interface IAuthProvider {
  children?: ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {

  //show Google popup
  const setGooglePopup = () => {
    signInWithPopup(auth, provider).then((data) => {
      if (data.user.email) {
        let storage = localStorage.setItem("userEmail", data.user.email);
      }

      if (Storage){
        console.log(Storage);
        console.log("email stocké");
      }

      else{
        console.log("email non stocké");
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        setGooglePopup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//hooks exportation
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
