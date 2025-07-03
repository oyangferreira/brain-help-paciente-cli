import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Loading } from './components/componentsIndex';
import ApresentationScreen from './screens/Apresentation/ApresentationScreen';
import LoginScreen from './screens/Login/LoginScreen';

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Simula 2 segundos de loading ao iniciar o app
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <Loading />;
  }

  if (showLogin) {
    return (
      <SafeAreaProvider>
        <LoginScreen />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <ApresentationScreen
        onFinish={() => {
          setShowLogin(true);
        }}
      />
    </SafeAreaProvider>
  );
};

export default App;