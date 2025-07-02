import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loading } from './components/componentsIndex';
import Apresentation from './screens/Apresentation/Apresentation';
import Login from './screens/Login/Login';

const App = () => {
  const [showOnboarding, setShowOnboarding] = useState(null);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {
      const seen = await AsyncStorage.getItem('@onboarding_seen');
      setShowOnboarding(seen !== 'true');
    };
    checkOnboarding();
  }, []);

  if (showOnboarding === null || showLoading) {
    return <Loading onTimeout={() => setShowLoading(false)} />;
  }

  return (
    <SafeAreaProvider>
      {showOnboarding ? (
        <Apresentation
          onFinish={() => {
            AsyncStorage.setItem('@onboarding_seen', 'true');
            setShowOnboarding(false);
          }}
        />
      ) : (
        <Login />
      )}
    </SafeAreaProvider>
  );

}

export default App;