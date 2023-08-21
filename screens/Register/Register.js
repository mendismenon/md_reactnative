import { Image, Text, View, Keyboard, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableHighlight, Pressable  } from "react-native";
import LoginStyles from "../Login/LoginStyles";
import RegisterPasswordStyles from "./RegisterPasswordStyles";
import TextIpt from "../../common/Elements/TextInput/TextIpt";
import ButtonCmp from "../../common/Elements/CustomButton/ButtonCmp";
import { useEffect, useState } from "react";
import Modal from "../../common/Modal/Modal";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const Register = ({ route, navigation }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pickedImagePath, setPickedImagePath] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library 
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
            handleModal();
          alert("You've refused to allow this appp to access your photos!");
          return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync();
    
        // Explore the result
        console.log(result);
        handleModal();
        if (!result.cancelled) {
          setPickedImagePath(result.uri);          
          console.log(result.uri);
        }
    };

    const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
            handleModal();
          alert("You've refused to allow this appp to access your camera!");
          return;
        }
    
        const result = await ImagePicker.launchCameraAsync();
    
        // Explore the result
        console.log(result);
    
        if (!result?.cancelled) {
            handleModal();
          setPickedImagePath(result.uri);
          console.log(result.uri);
        }
      }
    

    const handleChangeFn = (pname,pvalue) => {
        setForgotPwd({
            ...forgotPwd,
            [pname]: pvalue
        })
    };    

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };

    const onChangeDate = ({type}, selectedDate) => {
        if(type === 'set'){
            setDate(selectedDate);
        }else{
            toggleDatePicker();
        }
    };

    return (   
        <KeyboardAvoidingView behavior="padding" style={{flex: 1,  backgroundColor:'white'}}>    
        <View style={{}}>
            
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>   
                    <View>                                                                                               
                        <View style={RegisterPasswordStyles.viewImgPrnt}>
                            <View >
                                <TouchableHighlight 
                                    style={RegisterPasswordStyles.loginImage}
                                    onPress={() => handleModal()}>
                                    <Image 
                                        style={RegisterPasswordStyles.loginImageCls}
                                        source={pickedImagePath === '' 
                                            ? require('../../assets/UploadImage.png')
                                            : {uri: pickedImagePath}}
                                    />                                        
                                </TouchableHighlight>
                            </View>                                    
                            <View style={RegisterPasswordStyles.formFieldsPrnt}>
                                <TextIpt 
                                    name="firstName"
                                    placeholder='Enter First Name'
                                    onChangeText={(e)=>{handleChangeFn('firstName',e)}}
                                    value={''}
                                    secureTextEntry={false}
                                    label='First Name'
                                />
                                <TextIpt 
                                    name="lastName"
                                    placeholder='Enter Last Name'
                                    onChangeText={(e)=>{handleChangeFn('lastName',e)}}
                                    value={''}
                                    secureTextEntry={false}
                                    label='Last Name'
                                />  
                                <Text>
                                    Date Of Birth
                                </Text> 
                                {
                                    showPicker && (
                                        <DateTimePicker 
                                            mode="date"  
                                            display="spinner"
                                            value={date}
                                            onChange={onChangeDate}
                                        />   
                                    )
                                }
                                {
                                    !showPicker && (
                                        <Pressable onPress={toggleDatePicker}>
                                            <TextIpt 
                                                placeholder="Enter Date Of Birth"
                                                value={date}
                                                editable={false}
                                            />                                    
                                        </Pressable> 
                                    )
                                }                                                     
                            </View>
                            <ButtonCmp buttonText={'Register'} onPress={{}}/>  
                        </View> 
                                                                        
                    </View>
                      
                                                                             
                </>
            </TouchableWithoutFeedback>  
                 
        </View>
        <Modal isVisible={isModalVisible}>
            <View style={{flex:1, justifyContent: 'space-between',alignContent:"space-around"}}>
                <TouchableOpacity onPress={handleModal}>
                    <Icon name={'close'} size={55} color={'white'} style={{alignSelf: 'flex-end'}}/>
                </TouchableOpacity>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <ButtonCmp buttonText="Pick from gallery" onPress={showImagePicker} />
                    <View style={{padding:10}}></View>
                    <ButtonCmp buttonText="Open camera" onPress={openCamera} />
                    <View style={{padding:10}}></View>
                </View>                
            </View>
        </Modal>
        </KeyboardAvoidingView> 
    );
};

export default Register;