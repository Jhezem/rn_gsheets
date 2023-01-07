/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {QueryClientProvider, QueryClient} from 'react-query';
import MainNavigation from './navigation/MainNavigation';
import {NativeBaseProvider} from 'native-base';

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
    <NativeBaseProvider>
      <MainNavigation />
    </NativeBaseProvider>
  </QueryClientProvider>
  );
};

export default App;
