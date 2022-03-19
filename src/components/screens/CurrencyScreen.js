//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Api = 'http://api.nbp.pl/api/exchangerates/tables/C/';

const CurrencyScreen = () => {
    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
        </View>
    );
};
export default CurrencyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
