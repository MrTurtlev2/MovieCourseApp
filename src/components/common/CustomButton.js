import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomButton = ({btnText, onPress}) => {
    return (
        <TouchableOpacity style={styles.mainWrapper} onPress={() => onPress()}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    );
};
export default CustomButton;

const styles = StyleSheet.create({
    mainWrapper: {
        borderRadius: 4,
        backgroundColor: '#00BFFF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 15,
    },
    btnText: {
        color: '#FFF',
    },

});
