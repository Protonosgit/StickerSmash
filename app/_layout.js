import { Slot } from 'expo-router';
import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';

function Root() {

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Notification received in the foreground!', remoteMessage);
    });
    return unsubscribe;
  }, []);

  return (
      <Slot />
  );
}

export default Root;
