import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const CustomInput = ({value, onChangeText, placeholder}) => {

    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            styles={styles.input}
        />
    )
}

export default CustomInput;


const styles = StyleSheet.create({
    input: {
        borderRadius: 12,
        backgroundColor: 'blue',
    },
});