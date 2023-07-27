import { TextInput } from "react-native";
import TxtIptStyles from "./TextIptStyles";


const TextIpt = (props) => {
    return (
        <TextInput
            style={TxtIptStyles.input}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            value={props.value}
            name={props.name}
            secureTextEntry={props?.secureTextEntry ? props.secureTextEntry : false}
        />
    )
};

export default TextIpt;