import { StyleSheet} from "react-native";

const TxtIptStyles = StyleSheet.create({
    input: {
       borderWidth: 1,
       borderColor: '#ddd',
       padding: 10,
       fontSize: 18,
       borderRadius: 6,       
       backgroundColor: '#f5f9ff',
       // paddingTop: 10,
       // marginTop: 15,
       width: '80%'
       // border: '1px solid rgba(9,28,63,.1)'
    },
    inputLabel: {
        // alignSelf: 'flex-start',
        paddingTop: 20,
        padding: 5,
        paddingLeft: '10%',
        fontSize: 18,
        alignSelf: 'flex-start'
    }
});

export default TxtIptStyles;