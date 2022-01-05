import React, {useEffect, useState} from 'react';
import {
    getPopularMovies,
    getUpcomingMovies,
} from '../../../services/movie-services';
import {StyleSheet, View, Dimensions, FlatList, Text, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import List from "../common/List";

const Home = () => {
    const ScreenHeight = Dimensions.get('screen').height;
    const [moviesImages, setMoviesImages] = useState('');
    const [popularMovies, setPopularMovies] = useState('');

    useEffect(() => {
        getUpcomingMovies().then(movies => {
            const moviesArray = [];
            movies.forEach(movie => {
                moviesArray.push(
                    'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
                );
            });
            setMoviesImages(moviesArray);
        });
        getPopularMovies().then(movies => {
            setPopularMovies(movies);
        });
    }, []);
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.sectionContainer}>
            <SliderBox
                images={moviesImages}
                sliderBoxHeight={ScreenHeight / 1.5}
                circleLoop={true}
                autoplay={true}
                dotStyle={styles.sliderDots}
            />
            <List data={popularMovies} sectionTitle="Popular Movies" />
            <List data={popularMovies} sectionTitle="Popular Movies" />
            <List data={popularMovies} sectionTitle="Popular Movies" />
        </ScrollView>
    );
};
export default Home;

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
    },
    sliderDots: {
        width: 0,
    },
});
