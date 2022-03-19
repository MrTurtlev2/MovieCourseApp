import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Validator = ({isValid, text}) => {
    return (
        <View style={styles.container}>
            <View style={isValid ? styles.valid : styles.invalid} />
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    );
};
export default Validator;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 150,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    valid: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
    },
    invalid: {
        height: 50,
        width: 50,
        backgroundColor: '#FF0000',
    },
    textStyle: {
        marginLeft: 10,
    },
});
