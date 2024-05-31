import {React} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import Tab1 from './(tabs)/tab1/_layout.js';
import Tab2 from './(tabs)/tab2/_layout.js';
import Tab3 from './(tabs)/tab3/_layout.js';
import DrawerContent from '../../components/MainUI/Drawer.js';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();


// Drawer code
function AppDrawerStack() {

  return (
    <Drawer.Navigator drawerContent={props => <DrawerView {...props} />}>
      <Drawer.Screen name='drawer' options={{ headerShown: false }} component={AppBottomStack} />
    </Drawer.Navigator>
  );
}

function DrawerView() {
  return (
    <DrawerContent />
  );
}

// Bottom Stack Part
function AppBottomStack() {
  return (
      <Tab.Navigator>
          <Tab.Screen
            name="Tab1"
            component={Tab1}
          />
          <Tab.Screen
            name="Tab2"
            component={Tab2}
          />
        <Tab.Screen
            name="Tab3"
            component={ Tab3 }
          />
        </Tab.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer independent={true}>
        <AppDrawerStack />
    </NavigationContainer>
  );

}