import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase.js";
import { User } from "../interfaces/contexts/User.js";
import { AuthContextType } from "../interfaces/contexts/AuthContextType.js";
import { UserAuthContextProviderProps } from "../interfaces/contexts/UserAuthContextProviderProps.js";

const userAuthContext = createContext<AuthContextType | undefined>(undefined);

export const UserAuthContextProvider: React.FC<
  UserAuthContextProviderProps
> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const logIn = (email: string, password: string): Promise<any> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = (email: string, password: string): Promise<any> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = (): Promise<void> => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      console.log("Auth", currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue: AuthContextType = {
    user: user as User,
    logIn,
    signUp,
    logOut,
  };

  return (
    <userAuthContext.Provider value={contextValue}>
      {children}
    </userAuthContext.Provider>
  );
};

export function useUserAuth(): AuthContextType {
  const context = useContext(userAuthContext);
  if (!context) {
    throw new Error(
      "useUserAuth must be used within a UserAuthContextProvider"
    );
  }
  return context;
}
