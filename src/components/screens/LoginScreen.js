import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import CustomButton from '../common/CustomButton';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView behavior="padding" styles={styles.KeyboardView}>
            <TextInput
                placeholder="Login"
                value={email}
                onChange={text => setEmail(text)}
                styles={styles.Input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChange={text => setPassword(text)}
                styles={styles.Input}
                secureTextEntry
            />

            <CustomButton btnText="Login" />
            {/* <CustomButton btnText="Register" onPress={handleSignUp} /> */}
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    KeyboardView: {},
    Input: {
        borderRadius: 12,
        backgroundColor: 'blue',
    },
});
