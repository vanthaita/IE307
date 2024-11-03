import { Href, Redirect } from 'expo-router';
import React from 'react';

import { useAuth } from '~/context/AuthContext';

const Page = () => {
  const { isAuthenticated } = useAuth();
  return <Redirect href={isAuthenticated ? ('/(tabs)/' as Href) : ('/(auth)/login' as Href)} />;
};

export default Page;
