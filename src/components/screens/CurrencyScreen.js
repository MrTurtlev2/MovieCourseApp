import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, FlatList} from 'react-native';
// import getPlnToForeign from '../../../services/currency-service';

const CurrencyScreen = () => {
    const [currencyValue, setCurrencyValue] = useState(null);
    const [currencyHistoryValue, setCurrencyHistoryValue] = useState(null);

    const appi = 'http://api.nbp.pl/api/cenyzlota';
    const currencyHistoryApi = 'http://api.nbp.pl/api/exchangerates/rates/c/';

    const getPlnToForeign = async () => {
        const resp = await axios.get(appi);
        return resp.data[0];
    };

    useEffect(() => {
        getPlnToForeign().then(item => {
            setCurrencyValue(item);
            console.log(item);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text>{currencyValue.cena}</Text>
            <Text>grgerg</Text>
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
