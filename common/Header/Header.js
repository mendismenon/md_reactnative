import React from "react";
import { Text, View } from "react-native";
import HeaderStyles from "./HeaderStyle";

const Header  = () => {

    return (
        <View style={HeaderStyles.header}>
            <View>
                <Text>
                    Test Header
                </Text>
            </View>
        </View>
    );
};

export default Header;