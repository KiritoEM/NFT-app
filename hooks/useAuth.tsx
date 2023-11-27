import React, { ReactNode, createContext, useContext, useState } from "react";
import { auth, provider } from "./../firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";

export interface IAuthContext {
  setGooglePopup: () => void;
  email: string | null;
}

interface IAuthProvider {
  children?: ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [email, setEmail] = useState<string | null>("");

  //show Google popup
  const setGooglePopup = () => {
    signInWithPopup(auth, provider).then((data) => {
      setEmail(data.user.email);
      if (email !== null) {
        localStorage.setItem("userEmail", email);
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        email,
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
