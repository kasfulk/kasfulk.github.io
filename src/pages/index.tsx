import React from 'react';
import type { NextPage } from 'next';
import AppLayout from '@/components/layout/AppLayout';

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      <h1>Home</h1>
    </AppLayout>
  );
};

export default Home;
