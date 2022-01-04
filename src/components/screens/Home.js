import React, {useEffect, useState} from 'react';
import {
    getPopularMovies,
    getUpcomingMovies,
} from '../../../services/movie-services';
import {StyleSheet, Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const Home = () => {
    const [moviesImages, setMoviesImages] = useState('');
    // const [popularMovies, setPopularMovies] = useState('');

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
    }, []);
    return (
        <View style={styles.sectionContainer}>
            <SliderBox images={moviesImages} />
            {/*<Text>{popularMovies.original_title}</Text>*/}
            <Text>rgrg</Text>
        </View>
    );
};
export default Home;

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
    },
});
