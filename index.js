import 'expo-router/entry';

import messaging from '@react-native-firebase/messaging';
import { router } from 'expo-router';

async function onMessage(message) {
    console.log('message received', message);
}

messaging().setBackgroundMessageHandler(onMessage);