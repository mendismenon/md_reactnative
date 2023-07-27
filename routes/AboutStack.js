import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../screens/About/About';


const Stack = createNativeStackNavigator();


const AboutStack = () => {
    return (
          <Stack.Navigator>                    
            <Stack.Screen
              name="About"
              component={About}
              options={{title: 'About'}}
            />                
          </Stack.Navigator>
    );
};

export default AboutStack;