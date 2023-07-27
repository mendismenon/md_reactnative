import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import ReviewDetails from '../screens/ReviewDetails/ReviewDetails';
import Header from '../common/Header/Header';


const Stack = createNativeStackNavigator();


const HomeStack = () => {
    return (        
          <Stack.Navigator screenOptions={{headerShown: true}}>   
          <Stack.Screen
              name="Home"
              component={Home}
              options={{headerTitle: ()=><Header/>, 
                headerShown:false , 
                headerStyle: {backgroundColor: '#eee'}}
              }
            />                     
            <Stack.Screen
              name="Review Details"
              component={ReviewDetails}
              options={{title: '', }}

            />            
          </Stack.Navigator>
    );
};

export default HomeStack;