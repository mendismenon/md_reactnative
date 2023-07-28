import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import Login from '../screens/Login/Login';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginStyles from '../screens/Login/LoginStyles';
import HeaderBack from '../common/Elements/HeaderBack/HeaderBack';
const DrawerNavigation = createDrawerNavigator();

export default function Drawer () {
  // const navigation = useNavigation();
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
            name="Forgot Password"             
            component={ForgotPassword} 
            options={({navigation})=>({headerShown:true,
              headerLeft: ()=>(
                <HeaderBack navigation={navigation}/>
              ),
              headerStyle: {
              backgroundColor: "#D6EAF8"
              },
              headerTitleStyle: {
                color: "#007AFF"
               },})}
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

