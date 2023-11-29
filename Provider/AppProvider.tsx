import { AuthProvider } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { NavProvider } from "@/hooks/useNav";

interface Ichildren {
  children?: ReactNode;
}

const AppProvider: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return (
    <AuthProvider>
      <NavProvider>{children}</NavProvider>
    </AuthProvider>
  );
};

export default AppProvider;
