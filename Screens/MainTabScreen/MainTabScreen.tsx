import React from 'react'
import { View, Text } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Icon from 'react-native-vector-icons/Ionicons';
import { Foundation } from '@expo/vector-icons';

import HomeScreen from '../HomeScreen';
import DetailsScreen from '../DetailsScreen';
import ExploreScreen from '../ExploreScreen';
import ProfileScreen from '../ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const HomeStackScreen = ({ navigation }) => {
     return (
          <HomeStack.Navigator screenOptions={{
               headerStyle: {
                    backgroundColor: '#009387',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                    fontWeight: 'bold'
               }
          }}>
               <HomeStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                         headerLeft: () => (
                              <Icon.Button
                                   name="ios-menu"
                                   size={25}
                                   backgroundColor="#009387"
                                   onPress={() => { navigation.openDrawer() }}
                              />

                         )
                    }}
               />
          </HomeStack.Navigator>

     )
}

const DetailsStackScreen = ({ navigation }) => {
     return (
          <DetailsStack.Navigator screenOptions={{
               headerStyle: {
                    backgroundColor: '#d02860',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                    fontWeight: 'bold'
               }
          }}>
               <DetailsStack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{
                         headerLeft: () => (
                              <Icon.Button
                                   name="ios-menu"
                                   size={25}
                                   backgroundColor="#d02860"
                                   onPress={() => { navigation.openDrawer() }}
                              />
                         )
                    }}
               />
          </DetailsStack.Navigator>

     )
}

const MainTabScreen = () => {
     return (
          <Tab.Navigator
               initialRouteName="Feed"
               activeColor="#fff"
          >
               <Tab.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{
                         tabBarLabel: 'Home',
                         tabBarColor:'#009387',
                         tabBarIcon: ({ color }) => (
                              <Foundation name="home" size={26} color={color} />
                         ),
                    }}
               />
               <Tab.Screen
                    name="Details"
                    component={DetailsStackScreen}
                    options={{
                         tabBarLabel: 'Details',
                         tabBarColor:'#d02860',
                         tabBarIcon: ({ color }) => (
                              <Icon name="ios-notifications" color={color} size={26} />
                         ),
                    }}
               />
               <Tab.Screen
                    name="Explore"
                    component={ExploreScreen}
                    options={{
                         tabBarLabel: 'Explore',
                         tabBarColor:'#1f65ff',
                         tabBarIcon: ({ color }) => (
                              <Foundation name="magnifying-glass" size={26} color={color} />
                         ),
                    }}
               />
               <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                         tabBarLabel: 'Profile',
                         tabBarColor:'#694fad',
                         tabBarIcon: ({ color }) => (
                              <Foundation name="torso" size={24} color={color} />
                         ),
                    }}
               />
               
          </Tab.Navigator>
     )
}

export default MainTabScreen
