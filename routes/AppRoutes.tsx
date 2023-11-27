import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

interface IChildren {
  children: ReactNode;
}

let email: string | null;

const AppRoutes: React.FC<IChildren> = ({ children }): JSX.Element => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    email = localStorage.getItem("userEmail");
  }

  useEffect(() => {
    if (!email) {
      router.push("/");
    } else {
      if (email && router.pathname === "/") {
        router.push("/landing");
      }
    }
  }, []);

  return <>{children}</>;
};

export default AppRoutes;
