
import {React} from 'react'
import {  Stack } from 'expo-router'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


  const InitialLayout = () => {


    return <Stack screenOptions={{ headerShown: false }} />;
}


const RootLayout = () => {
  return (
        <InitialLayout />
  );
};

export default RootLayout;