import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Validator = ({isValid}) => {
    return (
        <View style={{backgroundColor: isValid ? 'red' : 'black'}}>
            <View style={styles.container} />
        </View>
    );
};
export default Validator;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
    },
});
