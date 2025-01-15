import React from "react";
import { MDXProvider } from '@mdx-js/react';
import '../styles/globals.css';

const components = {
  wrapper: ({ children }) => <>{children}</>,
  p: ({ children }) => <div className="text-gray-400 mb-4">{children}</div>,
};

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}