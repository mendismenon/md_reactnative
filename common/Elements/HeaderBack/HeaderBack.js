import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import HeaderBackStyles from './HeaderBackStyles';


const HeaderBack = ({navigation}) => {

    return(
        <View>
            <TouchableWithoutFeedback
                onPress={()=>{navigation.goBack(null)}}
            >
                <Image
                    style={HeaderBackStyles.imageSize}                 
                    source={require('../../../assets/backIcon.png')}
                />   
            </TouchableWithoutFeedback>        
        </View>
    );
};

export default HeaderBack;