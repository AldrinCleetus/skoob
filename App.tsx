import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
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
import {MyDefaultTheme} from './src/utils/Theme';
import {Provider} from 'react-redux';
import Store from './src/store/Store';
import ViewAllBooks from './src/pages/ViewAllBooks';

const Tab = createBottomTabNavigator<RootStackParamList>();

function App() {
  const colorScheme: ColorSchemeName = useColorScheme();
  return (
    <Provider store={Store}>
      <NavigationContainer
        theme={{...MyDefaultTheme, dark: colorScheme === 'dark'}}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Recommended" component={ViewAllBooks} />
          <Tab.Screen name="Bookmarks" component={ProfileScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
