import { Image, Text, View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView  } from "react-native";
import LoginStyles from "../Login/LoginStyles";
import ForgotPasswordStyles from "./ForgotPasswordStyles";
import TextIpt from "../../common/Elements/TextInput/TextIpt";
import ButtonCmp from "../../common/Elements/CustomButton/ButtonCmp";
import { useEffect, useState } from "react";
import Validation from "./Validation";
import PasswordChange from "./PasswordChange";


const ForgotPassword = ({ route, navigation }) => {

    const [forgotPwd, setForgotPwd] = useState({
        email: ''
    });

    const [steps, setSteps] = useState(1); 
    const { step } =route.params;

    const handleChangeFn = (pname,pvalue) => {
        setForgotPwd({
            ...forgotPwd,
            [pname]: pvalue
        })
    };

    const sendOTPFn = () => {
        setSteps(2);
    };

    useEffect(()=>{
        setSteps(step);
    },[]);

    return (   
        <KeyboardAvoidingView behavior="padding" style={{flex: 1,  backgroundColor:'white'}}>    
        <View style={{}}>
            
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>   
                    {
                        steps === 1 && (
                            <View>                                                               
                                <Text style={ForgotPasswordStyles.TxtEmailLbl}>
                                    Forgot Password?
                                </Text>
                                <View style={ForgotPasswordStyles.viewImgPrnt}>
                                    <Image 
                                        style={ForgotPasswordStyles.loginImage} 
                                        source={require('../../assets/avatarSad.png')}/>
                                        <Text style={ForgotPasswordStyles.TxtEmailLbl}>
                                            Enter the email address assosiated with your account.
                                        </Text>
                                        <Text style={ForgotPasswordStyles.TxtOtpLbl}>
                                            We will email you a OTP to reset your password.
                                        </Text> 
                                        <View style={ForgotPasswordStyles.formFieldsPrnt}>
                                            <TextIpt 
                                                name="email"
                                                placeholder='Email address'
                                                onChangeText={(e)=>{handleChangeFn('email',e)}}
                                                value={forgotPwd.email}
                                                secureTextEntry={false}
                                                keyboardType="email-address"
                                            />                                
                                        </View>
                                        <ButtonCmp buttonText={'Send'} onPress={sendOTPFn}/>  
                                </View> 
                                                                             
                            </View>
                        )
                    }
                    {
                        steps === 2 && (
                            <Validation 
                                updateStep={(step)=>setSteps(step)}
                            />
                        )
                    }
                    {
                        steps === 3 && (
                            <PasswordChange 
                                updateStep={(step)=>setSteps(step)}
                                navigation={navigation}
                            />
                        )
                    }                                           
                </>
            </TouchableWithoutFeedback>  
                 
        </View>
        </KeyboardAvoidingView> 
    );
};

export default ForgotPassword;