import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import keyImage from '../../assets/icons/locker.png';

const CustomInput = ({value, onChangeText, placeholder, icon}) => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={styles.inputWrapper}>
            <Image source={icon} style={styles.inputImage} />
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#9CA8BE"
                styles={styles.input}
                width={windowWidth - 150}
            />
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#9CA8BE',
    },
    input: {
        marginBottom: 10,
        width: 200,
    },
    inputImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
    },
});
