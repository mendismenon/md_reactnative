// <script src="http://localhost:8097"></script>
import React, { useEffect, useState } from 'react';
import Home from './screens/Home/Home';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from 'react-native';
import HomeStack from './routes/HomeStack';
import Drawer from './routes/Drawer';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  if(fontsLoaded){
    return (    
      <View style={{flex:1}} onLayout={onLayoutRootView}>
        <Drawer/>
      </View>
    );
  }
}

