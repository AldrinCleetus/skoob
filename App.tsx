import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Button,
  ColorSchemeName,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './src/types/types';
import Home from './src/pages/Home';
import ProfileScreen from './src/pages/Profile';
import {MyDarkTheme, MyDefaultTheme} from './src/utils/Theme';
import {Provider} from 'react-redux';
import Store from './src/store/Store';
import ViewAllBooks from './src/pages/ViewAllBooks';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBook,
  faBookBookmark,
  faBookOpen,
  faHome,
  faMugSaucer,
  faPerson,
  faUser,
  faUserAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import AuthenticationPage from './src/pages/AuthenticationPage';

const Tab = createBottomTabNavigator<RootStackParamList>();

function App() {
  const colorScheme: ColorSchemeName = useColorScheme();
  const {colors} = useTheme();
  const isAuth = false;

  return (
    <Provider store={Store}>
      <NavigationContainer
        // theme={{...MyDefaultTheme, dark: colorScheme === 'dark'}}
        theme={colorScheme === 'dark' ? MyDarkTheme : MyDefaultTheme}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              marginHorizontal: 10,
              borderRadius: 100,
              marginBottom: 10,
              backgroundColor: colors.card,
            },
          }}>
          {isAuth ? (
            <>
              <Tab.Screen
                options={{
                  tabBarIcon: ({size, color, focused}) => (
                    <FontAwesomeIcon size={size} color={color} icon={faHome} />
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
                      size={size}
                      color={color}
                      icon={faBookOpen}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Bookmarks"
                component={ProfileScreen}
                options={{
                  tabBarIcon: ({size, color, focused}) => (
                    <FontAwesomeIcon
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
    </Provider>
  );
}

export default App;
