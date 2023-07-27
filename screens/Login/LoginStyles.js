import { StyleSheet} from "react-native";

const LoginStyles= StyleSheet.create({
    loginImage: {
        width: '80%',
        height: '48%',
        borderRadius: 500,        
    },
    viewImgPrnt: {
        backgroundColor: 'white',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 10
        // flex: 1
    },memberLgnTxt: {
        textAlign: 'center',
        paddingTop: 20,
        color: '#091c3f',
        fontSize: 20,
        fontWeight: 700,
        paddingVertical: 0 ,
        paddingHorizontal: 10
    },
    formFieldsPrnt: {
        width:'100%',
        margin: 'auto',
        // flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgotPasswordStyle: {
        paddingTop: 10,
        paddingEnd: 30,
        fontWeight:'bold',
        color: '#007dff',
        alignSelf: 'flex-end'
    },
    signUpView:{
        paddingTop: 20,
        flexDirection: 'row'
    }
});

export default LoginStyles;