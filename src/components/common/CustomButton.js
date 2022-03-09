import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomButton = ({btnText, onPress}) => {
    return (
        <TouchableOpacity style={styles.MainWrapper} onPress={() => onPress}>
            <Text>{btnText}</Text>
        </TouchableOpacity>
    );
};
export default CustomButton;

const styles = StyleSheet.create({
    KeyboardView: {},
    MainWrapper: {
        borderRadius: 12,
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 100,
        marginBottom: 10,
    },
});
