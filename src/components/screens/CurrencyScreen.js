import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, FlatList} from 'react-native';
// import getPlnToForeign from '../../../services/currency-service';

const CurrencyScreen = () => {
    const [currencyValue, setCurrencyValue] = useState(null);

    const appi = 'http://api.nbp.pl/api/cenyzlota';

    const getPlnToForeign = async () => {
        axios.get(appi).then(response => {
            // console.log(response.data);
            setCurrencyValue(response.data[0].cena);
            // return response.data;
        });
    };

    useEffect(() => {
        getPlnToForeign();
    }, []);

    console.log(currencyValue);

    return (
        <View style={styles.container}>
            <Text>{currencyValue}</Text>
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
