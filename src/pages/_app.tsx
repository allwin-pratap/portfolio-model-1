import type { AppProps } from "next/app";
import Layout from '../Layout/index';
import MetaTag from '@/components/Layout/MetaTag';
import Script from 'next/script';
import { Outfit } from '@next/font/google';
import "../assets/scss/style.css";

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700', '800'], // Choose the weights you need
  subsets: ['latin'], // Choose the character subsets you need
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function App({ Component, pageProps }: AppProps) {
  const { seo } = pageProps?.data || {};

  return (
    <Layout className={`${outfit.className}`}>
      {/* Google Analytics Scripts */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      {/* Meta Tags and Page Components */}
      <MetaTag data={seo} />
      <Component {...pageProps} />
    </Layout>
  );
}
