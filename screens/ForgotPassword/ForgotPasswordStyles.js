import { StyleSheet} from "react-native";


const ForgotPasswordStyles= StyleSheet.create({
    loginImage: {
        width: '80%',
        height: '50%',
        borderRadius: 500,        
    },
    viewImgPrnt: {
        backgroundColor: 'white',
        height: '80%',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
        // flex: 1
    },
    TxtEmailLbl: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 25
    },
    TxtOtpLbl: {
        fontSize: 20,
        textAlign: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        color: 'grey'
    },
    formFieldsPrnt: {
        width:'100%',
        margin: 'auto',
        // flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        marginBottom: 20
    },
});

export default ForgotPasswordStyles;