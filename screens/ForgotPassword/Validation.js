import { Text, View, Image } from 'react-native';
import ForgotPasswordStyles from './ForgotPasswordStyles';
import TextIpt from '../../common/Elements/TextInput/TextIpt';
import ButtonCmp from '../../common/Elements/CustomButton/ButtonCmp';
import { useState } from 'react';
import LoginStyles from '../Login/LoginStyles';


const Validation = ({updateStep}) => {

    const [otp, setOTP] = useState('');

    const handleChangeFn = (pvalue) => {
        setOTP(pvalue);
    };

    return(
        <View>
            <Text style={ForgotPasswordStyles.TxtEmailLbl}>
                Verification
            </Text>
            <View style={ForgotPasswordStyles.viewImgPrnt}>
                <Image
                    style={ForgotPasswordStyles.loginImage} 
                    source={require('../../assets/avatarSad.png')}/>
                    <Text style={ForgotPasswordStyles.TxtEmailLbl}>
                        Enter the verification code we just sent to you on your email address.
                    </Text>                    
                    <View style={ForgotPasswordStyles.formFieldsPrnt}>
                        <TextIpt
                            name="otp"
                            placeholder='OTP'
                            onChangeText={(e)=>{handleChangeFn(e)}}
                            value={otp}
                            secureTextEntry={false}
                            keyboardType={"numeric"}
                        />                                
                    </View>
                    <View style={LoginStyles.signUpView}>
                        <Text style={{paddingTop:10, paddingRight:10}}> 
                            If you don't receive a code! 
                        </Text>
                        <Text style={LoginStyles.forgotPasswordStyle}> 
                            Resend
                        </Text>
                    </View>                                      
                    <ButtonCmp buttonText={'Verify'} onPress={()=>updateStep(3)}/>
                    <View style={LoginStyles.signUpView}>                        
                        <Text style={LoginStyles.forgotPasswordStyle} onPress={()=>updateStep(1)}> 
                            Want to change the email address?
                        </Text>
                    </View>  
            </View>                    
        </View>
    )
};

export default Validation;