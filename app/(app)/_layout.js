import { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging';
import {React} from 'react'
import {  Stack } from 'expo-router'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


  const InitialLayout = () => {

    async function onAppBootstrap() {
      // Request permissions
      await messaging().requestPermission();
      
      // Register the device with FCM
      await messaging().registerDeviceForRemoteMessages();
    
      // Get the token
      const token = await messaging().getToken();
    
      // Save the token
      console.log(token);
    }
  
    useEffect(() => {
      onAppBootstrap();
    }, []);


    return <Stack screenOptions={{ headerShown: false }} />;
}


const RootLayout = () => {
  return (
    <InitialLayout />
  );
};

export default RootLayout;