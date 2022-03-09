import React, {useEffect, useState} from 'react';
import {
    getPopularMovies,
    getUpcomingMovies,
    getPopularTv,
} from '../../../services/movie-services';
import {StyleSheet, Dimensions, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../common/List';

const Home = () => {
    const ScreenHeight = Dimensions.get('screen').height;
    const [moviesImages, setMoviesImages] = useState('');
    const [popularMovies, setPopularMovies] = useState('');
    const [upcomingMovies, setUpcomingMovies] = useState('');
    const [popularTv, setPopularTv] = useState('');
    const [loadingError, setLoadingError] = useState('');

    const getData = () => {
        return Promise.all([
            getPopularMovies(),
            getUpcomingMovies(),
            getPopularTv(),
        ]);
    };

    useEffect(() => {
        getData()
            .then(
                ([
                    upcomingMoviesPromise,
                    popularMoviesPromise,
                    popularTvPromise,
                ]) => {
                    const moviesArray = [];
                    upcomingMoviesPromise.forEach(movie => {
                        moviesArray.push(
                            'https://image.tmdb.org/t/p/w500/' +
                                movie.poster_path,
                        );
                    });
                    setMoviesImages(moviesArray);
                    setUpcomingMovies(upcomingMoviesPromise);
                    setPopularMovies(popularMoviesPromise);
                    setPopularTv(popularTvPromise);
                },
            )
            .catch(err => {
                setLoadingError(err);
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
            <List data={upcomingMovies} sectionTitle="Upcoming Movies" />
            <List data={popularTv} sectionTitle="Popular Tv's" />
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
