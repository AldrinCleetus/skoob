import {Image, Text, TextComponent, View} from 'react-native';
import {MyDefaultTheme} from '../utils/Theme';

const LandingNavBar = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 20,
        height: 120,
      }}>
      <View style={{maxWidth: '50%'}}>
        <Text
          style={{
            fontSize: 32,
            color: MyDefaultTheme.colors.primary,
            fontWeight: '300',
          }}>
          Good Morning,
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: MyDefaultTheme.colors.text,
            fontWeight: 'bold',
          }}>
          Bruce Wayne
        </Text>
      </View>
      <View style={{width: '50%', height: '100%'}}>
        <Image
          style={{width: 'auto', height: '100%', objectFit: 'contain'}}
          source={{uri: 'https://i.imgur.com/P5ZDZq2.png'}}></Image>
      </View>
    </View>
  );
};

export default LandingNavBar;
