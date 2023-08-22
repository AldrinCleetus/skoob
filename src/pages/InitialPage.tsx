import {NavigationContainer, useTheme} from '@react-navigation/native';
import {ColorSchemeName, StyleSheet, useColorScheme} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {useSelector} from 'react-redux';
import {RootState} from '../store/Store';
import {AppDarkColors, MyDarkTheme, MyDefaultTheme} from '../utils/Theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookBookmark,
  faBookOpen,
  faHome,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import ViewAllBooks from './ViewAllBooks';
import ProfileScreen from './Profile';
import AuthenticationPage from './AuthenticationPage';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useEffect} from 'react';
import BookmarkedBooksPage from './BookmarkedBooksPage';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';

const InitialPage = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();

  const colorScheme: ColorSchemeName = useColorScheme();
  const {colors, dark} = useTheme();
  const {user, hasValidCredentials, getCredentials} = useAuth0();

  const {isUserLoggedIn, status} = useSelector(
    (state: RootState) => state.userAuth,
  );

  useEffect(() => {
    if (status !== 'pending' && status !== 'idle') {
      SplashScreen.hide();
    }
  }, [status]);

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? MyDarkTheme : MyDefaultTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            styles.tabBarStyle,
            {
              backgroundColor: dark
                ? MyDarkTheme.colors.card
                : MyDefaultTheme.colors.card,
            },
          ],
        }}>
        {isUserLoggedIn ? (
          <>
            <Tab.Screen
              options={{
                tabBarIcon: ({size, color, focused}) => (
                  <FontAwesomeIcon
                    style={{backgroundColor: '#FFFFFF00'}}
                    size={size}
                    color={color}
                    icon={faHome}
                  />
                ),
              }}
              name="Home"
              component={Home}
            />
            <Tab.Screen
              name="Recommended"
              component={ViewAllBooks}
              options={{
                tabBarIcon: ({size, color, focused}) => (
                  <FontAwesomeIcon
                    style={{backgroundColor: '#FFFFFF00'}}
                    size={size}
                    color={color}
                    icon={faBookOpen}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Bookmarks"
              component={BookmarkedBooksPage}
              options={{
                tabBarIcon: ({size, color, focused}) => (
                  <FontAwesomeIcon
                    style={{backgroundColor: '#FFFFFF00'}}
                    size={size}
                    color={color}
                    icon={faBookBookmark}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({size, color, focused}) => (
                  <FontAwesomeIcon
                    style={{backgroundColor: '#FFFFFF00'}}
                    size={size}
                    color={color}
                    icon={faUserCircle}
                  />
                ),
              }}
            />
          </>
        ) : (
          <Tab.Screen
            name="Auth"
            component={AuthenticationPage}
            options={{
              tabBarStyle: {
                display: 'none',
              },
            }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    marginHorizontal: 10,
    borderRadius: 100,
    marginBottom: 10,
  },
});

export default InitialPage;
