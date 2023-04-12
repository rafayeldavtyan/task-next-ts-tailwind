import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@ct/authContext';
import HomepageSection from '@components/Sections/Homepage';

export default function Home() {
  const router = useRouter();
  const { authorized } = useContext(AuthContext);

  useEffect(() => {
    if (!authorized) {
      router.push('/login');
    }
  }, [authorized, router])

  return (
      <HomepageSection />
  )
}