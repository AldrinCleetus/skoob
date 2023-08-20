import {View, Text, Image, TouchableOpacity} from 'react-native';
import {AuthenticationPageProps} from '../types/types';
import {useTheme} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

const AuthenticationPage = (props: AuthenticationPageProps) => {
  const {colors, dark} = useTheme();

  const LogoImage = dark
    ? require('../../assets/logo-main.png')
    : require('../../assets/logo-main-light.png');

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: '100%',
        alignItems: 'flex-end',
      }}>
      <Image
        style={{width: '100%', height: 300, alignSelf: 'center'}}
        source={LogoImage}></Image>
      <TouchableOpacity
        style={{
          display: 'flex',
          backgroundColor: colors.card,
          width: '60%',
          alignSelf: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          paddingVertical: 15,
          paddingHorizontal: 10,
          borderRadius: 100,
          marginTop: 60,
        }}>
        <FontAwesomeIcon
          size={20}
          color={colors.text}
          icon={faGoogle}></FontAwesomeIcon>
        <Text style={{textAlign: 'center', color: colors.text}}>
          Sign In With Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthenticationPage;
