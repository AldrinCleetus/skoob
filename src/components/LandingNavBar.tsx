import {Image, StyleSheet, Text, View} from 'react-native';
import {MyDefaultTheme} from '../utils/Theme';
import {useAuth0} from 'react-native-auth0';
import {
  capitalizeFirstLetter,
  getGreetingBasedOnTimeOfDay,
} from '../utils/helper';

const LandingNavBar = () => {
  const {user} = useAuth0();
  return (
    <View style={styles.navBarParent}>
      <View style={styles.navTitleContainer}>
        <Text style={[styles.navTitle, {color: MyDefaultTheme.colors.primary}]}>
          {getGreetingBasedOnTimeOfDay()}
        </Text>
        <Text style={[styles.userName, {color: MyDefaultTheme.colors.text}]}>
          {user?.nickname && capitalizeFirstLetter(user.nickname)}
        </Text>
      </View>
      <View style={styles.navImageContainer}>
        <Image
          style={styles.navImage}
          source={{uri: 'https://i.imgur.com/P5ZDZq2.png'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
    height: 120,
  },
  navTitleContainer: {maxWidth: '50%'},
  navTitle: {
    fontSize: 32,
    fontWeight: '300',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navImageContainer: {
    width: '50%',
    height: '100%',
  },
  navImage: {
    width: 'auto',
    height: '100%',
    objectFit: 'contain',
  },
});

export default LandingNavBar;
