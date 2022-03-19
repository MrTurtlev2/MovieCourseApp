import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CustomButton from '../common/CustomButton';
import {autenthication} from '../../../firebase/firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {
    hasBigLetter,
    isValidEmail,
    hasSpecialLetters,
    testRegexValue,
} from '../../../regex/Regex';
import Validator from '../common/Validator';
import CustomInput from '../common/CustomInput';
import {useNavigation} from '@react-navigation/native';
import letterIcon from '../../assets/icons/letter.png';
import lockerIcon from '../../assets/icons/locker.png';
import {ScrollView} from 'react-native';

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
    };

    return (
        <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            endFillColor="#2c3e50">
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

                <Validator
                    text="email poprawny"
                    isValid={testRegexValue(isValidEmail, email)}
                />
                <Validator
                    text="Hasło posiada dużą literę"
                    isValid={testRegexValue(hasBigLetter, password)}
                />
                <Validator
                    text="Długość hasła 8+"
                    isValid={password.length > 8 ? true : false}
                />
                <Validator
                    text="Hasło posiada znak specjalny"
                    isValid={testRegexValue(hasSpecialLetters, password)}
                />

                <CustomButton btnText="Create account" onPress={createUser} />
            </View>
        </ScrollView>
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
    contentContainer: {paddingTop: 100, backgroundColor: '#2c3e50'},
});
