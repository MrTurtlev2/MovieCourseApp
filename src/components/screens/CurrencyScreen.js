//import liraries
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, FlatList} from 'react-native';
// import getPlnToForeign from '../../../services/currency-service';

const CurrencyScreen = () => {
    const [currencyValue, setCurrencyValue] = useState(null);

    const API = 'http://api.nbp.pl/api/exchangerates/tables/C/';
    const appi = 'http://api.nbp.pl/api/cenyzlota';
    const aaa =
        'https://api.themoviedb.org/3/movie/popular?api_key=ff50baa59a96c64b8d7de41b804d51f0';

    const getPlnToForeign = async () => {
        // const resp = await axios.get(appi);
        // return resp.data.results;

        axios.get(appi).then(response => {
            console.log(response.data);
            // setCurrencyValue(response.data);
            // return response.data;
        });
    };

    useEffect(() => {
        // getPlnToForeign()
        //     .then(data => {
        //         setCurrencyValue(data?.cena);
        //         console.log(data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        getPlnToForeign().then(data => {
            console.log(data);
            // setCurrencyValue(data);
        });
        // getPlnToForeign();
    }, []);
    // console.log(currencyValue);
    return (
        <View style={styles.container}>
            {/* <Text>{toString(currencyValue)}</Text> */}
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
