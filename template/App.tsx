import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import theme from './src/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const HomeStackNavigator = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello World</Text>
    </View>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
          <HomeStackNavigator.Navigator initialRouteName="Home">
            <HomeStackNavigator.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'HOME'}}
            />
          </HomeStackNavigator.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
