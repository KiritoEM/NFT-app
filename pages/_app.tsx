import "./../styles/global.scss";
import type { AppProps } from "next/app";
import AppProvider from "@/Provider/AppProvider";
import AppRoutes from "@/routes/AppRoutes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppRoutes>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AppRoutes>
  );
}
