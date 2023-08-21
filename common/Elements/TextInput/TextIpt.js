import { Text, TextInput } from "react-native";
import TxtIptStyles from "./TextIptStyles";


const TextIpt = (props) => {
    return (
        <>
            <Text 
                style={TxtIptStyles.inputLabel}
            >
                {props.label}
            </Text>
            <TextInput
                style={TxtIptStyles.input}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                name={props.name}
                secureTextEntry={props?.secureTextEntry ? props.secureTextEntry : false}
                keyboardType={props?.keyboardType ? props.keyboardType : 'default'}
                editable={props?.editable === false  ? false : true}
            />
        </>
    )
};

export default TextIpt;