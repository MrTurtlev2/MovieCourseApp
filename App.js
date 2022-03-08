import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './src/components/screens/Home';
// import createNativeStackNavigator from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/components/screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="LoginScreen"
                    component={LoginScreen}
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
