import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import CustomButton from '../common/CustomButton';
import {autenthication} from '../../../firebase/firebase-config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import {
    hasBigLetter,
    validPassword,
    validEmail,
    hasSpecialLetters,
} from '../../../regex/Regex';
import Validator from '../common/Validator';
import CustomInput from '../common/CustomInput';
import {useNavigation} from '@react-navigation/native';
import letterIcon from '../../assets/icons/letter.png';
import lockerIcon from '../../assets/icons/locker.png';

const RegisterScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = () => {
        createUserWithEmailAndPassword(autenthication, email, password)
            .then(event => {
                console.log(event);
                navigation.navigate('LoginScreen');
            })
            .catch(event => console.log(event));
        // navigation.navigate('LoginScreen');
    };

    const testing = () => {
        if (hasSpecialLetters.test(password)) {
            console.log('jest super');
            return true;
        } else {
            console.log('nie super :(');
            return false;
        }
    };
    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>

            <CustomInput
                placeholder="Enter email"
                value={email}
                icon={letterIcon}
                onChangeText={text => setEmail(text)}
            />
            {/* <CustomInput
                placeholder="Create password"
                value={password}
                icon={lockerIcon}
                onChangeText={text => setPassword(text)}
            /> */}
            <CustomInput
                placeholder="Repeat password"
                value={password}
                icon={lockerIcon}
                onChangeText={text => setPassword(text)}
            />

            <CustomButton btnText="Create account" onPress={testing} />

            <Validator isValid={testing()} />
        </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
