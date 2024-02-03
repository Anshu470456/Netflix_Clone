import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {

    useEffect(() => {

        setTimeout(() => {
            navigation.replace('Home')
        }, 3000);
    }, [])

    return (

        <View style={styles.container}>
            <StatusBar hidden backgroundColor={'transparent'} />
            <Image
                style={styles.Image}
                source={{ uri: 'https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940' }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#101010',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        width: '80%',
        height: 250,
        borderRadius: 30,



    }
})

export default Splash