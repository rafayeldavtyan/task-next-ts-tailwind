import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/authContext';
import AuthContextProvider from '@ct/authContext';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // const { authorized } = useContext(AuthContext);

  // useEffect(() => {
  //   if (!authorized) {
  //     router.push('/login');
  //   }
  // }, [authorized, router])

  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}
