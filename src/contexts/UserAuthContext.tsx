import { createContext, useContext, useEffect, useState } from "react";

import { supabase } from "../../supabase";
import { User } from "../interfaces/contexts/User";
import { AuthContextType } from "../interfaces/contexts/AuthContextType";
import { UserAuthContextProviderProps } from "../interfaces/contexts/UserAuthContextProviderProps";

const userAuthContext = createContext<AuthContextType | undefined>(undefined);

export const UserAuthContextProvider: React.FC<
  UserAuthContextProviderProps
> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const logIn = async (email: string, password: string): Promise<void> => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string): Promise<void> => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
  };

  const logOut = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser((session?.user as User | null) ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser((session?.user as User | null) ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const contextValue: AuthContextType = {
    user,
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
      "useUserAuth must be used within a UserAuthContextProvider",
    );
  }
  return context;
}
