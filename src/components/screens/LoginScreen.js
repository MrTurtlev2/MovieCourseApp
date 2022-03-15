import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import CustomButton from '../common/CustomButton';
import {autenthication} from '../../../firebase/firebase-config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import CustomInput from '../common/CustomInput';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedIn, setSignedIn] = useState(false);

    const createUser = () => {
        createUserWithEmailAndPassword(autenthication, email, password)
            .then(event => {
                console.log(event);
            })
            .catch(event => console.log(event));
    };

    const signInUser = () => {
        signInWithEmailAndPassword(autenthication, email, password)
            .then(event => {
                console.log(event);
                navigation.navigate('Home');
                setSignedIn(true);
            })
            .catch(event => console.log(event));
    };

    const signOutUser = () => {
        signOut(autenthication, email, password)
            .then(event => {
                console.log(event);
                setSignedIn(false);
            })
            .catch(event => console.log(event));
    };

    return (
        <View>
            <KeyboardAvoidingView
                behavior="padding"
                styles={styles.KeyboardView}>
                <CustomInput
                    placeholder="Login"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    keyboardType="numeric"
                />

                <CustomButton btnText="Register" onPress={createUser} />

                {isSignedIn ? (
                    <CustomButton btnText="Log Out" onPress={signOutUser} />
                ) : (
                    <CustomButton btnText="Login" onPress={signInUser} />
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    KeyboardView: {},
});
