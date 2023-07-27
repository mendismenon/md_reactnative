import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import Login from '../screens/Login/Login';
const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {
    return (
      <NavigationContainer>
        <DrawerNavigation.Navigator initialRouteName="Home">
        <DrawerNavigation.Screen
            name="God of Throngates"             
            component={Login} 
            options={{headerShown:true,
              headerLeft: false,
              headerStyle: {
              backgroundColor: "#D6EAF8"
              },
              headerTitleStyle: {
                color: "#007AFF"
               },}}
          />
          <DrawerNavigation.Screen 
            name="Home Drawer" 
            component={HomeStack} 
            options={{
              title: "News Drawe",
              headerTitleStyle: {
                   color: "white"
                  },
              headerStyle: {
                   backgroundColor: "red"
                   }, 
              headerBackTitle: null,
              headerTintColor: "white"
              }}
          />
          <DrawerNavigation.Screen 
            name="About Drawer" 
            component={AboutStack} 
          />
        </DrawerNavigation.Navigator>
      </NavigationContainer>
    );
  }

