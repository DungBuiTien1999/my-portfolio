import type { AppProps } from "next/app";
import "@src/styles/globals.css";
import "@src/styles/Home.module.css";
import { Layout } from "@src/components/Layout";
import { Rubik } from "@next/font/google";
import { Provider } from "react-redux";
import store from "@src/app/store";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={rubik.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  );
}
