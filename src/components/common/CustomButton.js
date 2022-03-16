import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

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
        backgroundColor: '#34BDB6',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 15,
        width: 200,
        // width: handle(200),
    },
    btnText: {
        color: '#E9FFFF',
    },
});
