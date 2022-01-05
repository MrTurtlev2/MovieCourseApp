import React from 'react';
import {
    StyleSheet,
    Views,
    FlatList,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

const Card = ({item}) => {
    return (
        <TouchableOpacity style={styles.cardWrapper}>
            <Image
                source={{
                    uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
                }}
                style={styles.cardImage}
            />
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    cardWrapper: {
        marginRight: 10,
    },
    cardImage: {
        borderRadius: 12,
        height: 200,
        width: 120,
    },
});
