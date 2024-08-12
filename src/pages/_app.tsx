import type { AppProps } from "next/app";
import Layout from '../Layout/index';
import MetaTag from '@/components/Layout/MetaTag';
import { Outfit } from '@next/font/google';
import "../assets/scss/style.css";

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700', '800'], // Choose the weights you need
  subsets: ['latin'], // Choose the character subsets you need
});

export default function App({ Component, pageProps }: AppProps) {
  const { seo } = pageProps?.data || {};
  return (
    <Layout className={outfit.className}>
      <MetaTag data={seo} />
      <Component {...pageProps} />
    </Layout>
  );
}