import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { CustomersProvider } from "../context/Data";
import { GlobalProvider } from "../context/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <GlobalProvider>
      <Layout>
        <CustomersProvider>
          <Component {...pageProps} />
        </CustomersProvider>
      </Layout>
    </GlobalProvider>
  );
}

export default MyApp;
