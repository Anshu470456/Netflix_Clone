import { View, Text, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const VideoPlayer = ({ route }) => {


    const {
        title,
        release_date,
        poster_path,
        overview,
        backdrop_path,
        vote_count,
    } = route.params.movieData;

    const [isVideoVisible, setisVideoVisible] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#000'} />
            <ScrollView style={styles.scrollContainer}>
                {
                    isVideoVisible ? (
                        <Video
                            setControls
                            controls
                            repeat={false}
                            resizeMode='cover'
                            source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                            onFullscreenPlayerWillPresent={() => {
                                Orientation.lockToLandscape();
                            }}
                            onFullscreenPlayerWillDismiss={() => {
                                Orientation.lockToPortrait();
                            }}
                            style={styles.firstContainer}
                        />
                    ) : (<Image
                        style={styles.firstContainer}
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}` }}
                    />)
                }

                {/* Second Container */}

                <View style={styles.secondContainer}>

                    {/* first box */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <Fontisto name='netflix' size={22} color='red' />
                        <Text style={{ color: 'white', fontSize: 15, letterSpacing: 4 }}>SERIES</Text>
                    </View>

                    {/* second box */}

                    <View>
                        <Text style={{ color: 'white', fontWeight: "bold", fontSize: 20 }}>{title}</Text>
                    </View>



                    {/* third box */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>{release_date.split('-')[0]}</Text>
                        <View style={{ width: 2.5, height: 20, backgroundColor: 'white' }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <MaterialIcons name='favorite' size={20} color='red' />
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '700', lineHeight: 15 }}>{vote_count}%</Text>
                            <MaterialIcons name='hd' size={25} color='white' />

                        </View>

                    </View>

                </View>

                {/* third container */}

                <View style={{ padding: 10, gap: 10, marginTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => {
                            setisVideoVisible(true);
                        }}
                        activeOpacity={0.8}
                        style={styles.playButton}>
                        <Entypo name="controller-play" size={22} color="black" />
                        <Text
                            style={[
                                styles.titles,
                                {
                                    fontSize: responsiveFontSize(2),
                                    color: 'black',
                                    fontWeight: '700',
                                },
                            ]}>
                            Play
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Clicked Download Button');
                        }}
                        activeOpacity={0.8}
                        style={[styles.playButton, { backgroundColor: '#2B292B' }]}>
                        <Octicons
                            style={{ marginRight: 5 }}
                            name="download"
                            size={22}
                            color="white"
                        />
                        <Text
                            style={[
                                styles.titles,
                                {
                                    fontSize: responsiveFontSize(2),
                                    color: 'white',
                                    fontWeight: '700',
                                },
                            ]}>
                            Download
                        </Text>
                    </TouchableOpacity>

                    <Text
                        style={{
                            fontSize: 16,
                            color: 'white',
                            marginVertical: 10,
                            lineHeight: 25,
                            textAlign: 'justify',
                        }}>
                        {overview}
                    </Text>
                </View>





            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginTop: StatusBar.currentHeight
    },
    scrollContainer: {
        flex: 1
    },
    firstContainer: {
        height: responsiveHeight(35),

    },
    secondContainer: {
        padding: 10,
        gap: 10,

    },
    titles: {
        fontSize: responsiveFontSize(2.3),
        color: 'white',
        fontWeight: '500',
    },
    playButton: {
        backgroundColor: 'white',
        height: responsiveHeight(5.3),
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },


})

export default VideoPlayer