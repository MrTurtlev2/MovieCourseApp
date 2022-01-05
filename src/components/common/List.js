import React from 'react';
import {StyleSheet, Views, FlatList, Text, View} from 'react-native';
import Card from './Card';

const List = ({data, sectionTitle}) => {
    return (
        <View style={styles.listWrapper}>
            <View>
                <Text style={styles.listHeader}>{sectionTitle}</Text>
            </View>
            <FlatList
                data={data}
                horizontal={true}
                renderItem={({item}) => <Card item={item} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default List;

const styles = StyleSheet.create({
    listWrapper: {
        marginTop: 10,
    },
    listHeader: {
        fontSize: 16,
    },
});
