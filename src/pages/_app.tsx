import Layout from "@/_components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { APIProvider } from "@vis.gl/react-google-maps";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
