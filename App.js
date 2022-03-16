import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './src/components/screens/Home';
import {LogBox} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/components/screens/LoginScreen';
import RegisterScreen from './src/components/screens/RegisterScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{headerShown: false}}
                    name="LoginScreen"
                    component={LoginScreen}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="RegisterScreen"
                    component={RegisterScreen}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Home"
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
    },
});

export default App;

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
