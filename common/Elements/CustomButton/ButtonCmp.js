import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import CustomBtnStyles from "./ButtonStyle";

const ButtonCmp = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={CustomBtnStyles.button}> 
                <Text style={CustomBtnStyles.buttonText}>
                    {props.buttonText}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonCmp;