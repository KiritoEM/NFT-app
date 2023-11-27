import { AuthProvider } from "@/hooks/useAuth";
import { ReactNode } from "react";

interface Ichildren {
    children ?: ReactNode;
  }

const AppProvider : React.FC<Ichildren> = ({children}) : JSX.Element => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default AppProvider;