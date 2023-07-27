import React from "react";
import { View, Text, Button } from "react-native";
import globalStyles from "../../styles/global";


const Home = ({navigation}) => {
    const butnClickFn =() =>{
        navigation.navigate('Review Details', {name: 'Review'})
      }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                Home Screen
            </Text>
            <Button title="Review Details" onPress={butnClickFn}/>
        </View>
    );
};

export default Home;