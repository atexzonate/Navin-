import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import MainTabScreen from './Screens/MainTabScreen';

import {DrawerContent} from './Screens/DrawerContent';
import SupportScreen from './Screens/SupportScreen';
import SettingsScreen from './Screens/SettingsScreen';
import BookmarkScreen from './Screens/BookmarkScreen';


const Drawer = createDrawerNavigator();




const App = () => {
     return (
          <NavigationContainer>
               <Drawer.Navigator 
                    drawerContent={props => <DrawerContent { ...props}/> }
               >
                    <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                    <Drawer.Screen name="Support" component={SupportScreen}/>
                    <Drawer.Screen name="Setting" component={SettingsScreen}/>
                    <Drawer.Screen name="Bookmark" component={BookmarkScreen}/>
               </Drawer.Navigator>
               
          </NavigationContainer>
     );
}

export default App;
