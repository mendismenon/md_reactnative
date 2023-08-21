import { StyleSheet} from "react-native";

const CustomBtnStyles= StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#007dff',
        marginTop: 15,
        width: 200
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',        
        fontSize: 16,
        textAlign: 'center',
        width: '100%',
    }
});

export default CustomBtnStyles;