import type { AppProps } from "next/app";
import { Outfit } from '@next/font/google';
import "../assets/scss/style.css";

const outfit = Outfit({
  weight: ['400', '500', '700'], // Choose the weights you need
  subsets: ['latin'], // Choose the character subsets you need
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div  className={outfit.className}>
      <Component {...pageProps} />
    </div>
  );
}
