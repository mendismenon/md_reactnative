import React, { useState } from "react";
import { Image, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import LoginStyles from "./LoginStyles";
import { Formik } from "formik";
import TextIpt from "../../common/Elements/TextInput/TextIpt";
import ButtonCmp from "../../common/Elements/CustomButton/ButtonCmp";

const Login  = (props) => {

    const [loginCredentials, setLoginCredentials] = useState({
        userName: '',
        password: ''
    })

    const loginFn = () => {
        
    };

    const handleChangeFn = (pname,pvalue) => {
        setLoginCredentials({
            ...loginCredentials,
            [pname]: pvalue
        })
    };

    return (
        <View style={{flex: 1, backgroundColor:'white'}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {/**  <KeyboardAvoidingView style={LoginStyles.viewImgPrnt} behavior="padding"> */}
                <View style={LoginStyles.viewImgPrnt}>
                <Image 
                    style={LoginStyles.loginImage} 
                    source={require('../../assets/md_pic.jpg')}/>
                    <Text style={LoginStyles.memberLgnTxt}>
                        Member Login
                    </Text>                    
                    <View style={LoginStyles.formFieldsPrnt}>
                        <TextIpt 
                            name="userName"
                            placeholder='Username'
                            onChangeText={(e)=>{handleChangeFn('userName',e)}}
                            value={loginCredentials.userName}
                            secureTextEntry={false}
                        />
                        <TextIpt 
                            name="password"
                            placeholder='Password'
                            onChangeText={(e)=>{handleChangeFn('password',e)}}
                            value={loginCredentials.password}
                            secureTextEntry={true}
                        />
                        <Text style={LoginStyles.forgotPasswordStyle} 
                            onPress={()=>props.navigation.navigate('Forgot Password',{
                                step: 1
                            })}> 
                            Forgot Password?
                        </Text>
                        <ButtonCmp buttonText={'Sign In'} /> 
                        <View style={LoginStyles.signUpView}>
                            <Text style={{paddingTop:10, paddingRight:10}}> 
                               Don't have an account?
                            </Text>
                            <Text style={LoginStyles.forgotPasswordStyle}
                                onPress={()=>props.navigation.navigate('Register')}> 
                               Sign Up
                            </Text>
                        </View>                      
                    </View>

                    </View>
            { /*</KeyboardAvoidingView>  */}
            </TouchableWithoutFeedback>                       
        </View>
    );
};

export default Login;