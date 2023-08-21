import { Text, View, Image } from 'react-native';
import ForgotPasswordStyles from './ForgotPasswordStyles';
import TextIpt from '../../common/Elements/TextInput/TextIpt';
import ButtonCmp from '../../common/Elements/CustomButton/ButtonCmp';
import { useState } from 'react';
import LoginStyles from '../Login/LoginStyles';
import PasswordChangeStyles from './PasswordChangeStyles';


const PasswordChange = ({updateStep, navigation}) => {

    const [passwordChange, setPasswordChange] = useState({
        newPassowrd: '',
        confirmPassword: ''
    });

    const handleChangeFn = () => {

    };
 
    return(
        <View>
            <Text style={ForgotPasswordStyles.TxtEmailLbl}>
                Reset Password
            </Text>
            <View style={ForgotPasswordStyles.viewImgPrnt}>
                <Image
                    style={PasswordChangeStyles.loginImage} 
                    source={require('../../assets/avatarHappy.png')}/>
                    <Text style={ForgotPasswordStyles.TxtEmailLbl}>
                        Your identity has been verified! Set your new passowrd.
                    </Text>                    
                    <View style={ForgotPasswordStyles.formFieldsPrnt}>
                        <TextIpt
                            name="newPassword"
                            placeholder='New Password'
                            onChangeText={(e)=>{handleChangeFn(e)}}
                            value={passwordChange.newPassowrd}
                            secureTextEntry={true}
                        />
                        <TextIpt
                            name="confirmPassword"
                            placeholder='Confirm Password'
                            onChangeText={(e)=>{handleChangeFn(e)}}
                            value={passwordChange.confirmPassword}
                            secureTextEntry={true}
                        />                                
                    </View>                                                        
                    <ButtonCmp buttonText={'Save'} onPress={()=>navigation.navigate('God of Throngates')}/>                     
            </View>                    
        </View>
    )
};

export default PasswordChange;