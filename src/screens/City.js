import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import IconText from '../components/IconText'

const City = () => {
    const { container, city, country, populationWrapper, populationText, riseSetText, riseSetWrapper, background, cityText, rowLayout} = styles
  return (
    <SafeAreaView style={container}>
        <ImageBackground source={require('../../assets/citybg.jpg')} style={background}>
            <Text style={[city, cityText]}>San Diego</Text>
            <Text style={[country, cityText]}>USA</Text>
            <View style={[populationWrapper, rowLayout]}>
                <IconText iconName={'user'} iconColor={'red'} bodyText={'1,500,000'} bodyTextStyles= {populationText} />
            </View>
            <View style={[riseSetWrapper, rowLayout]}>
                <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'6:08AM'} bodyTextStyles={riseSetText}/>
                <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'6:10PM'} bodyTextStyles={riseSetText}/>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0

    },
    background: {
        flex:1
    },
    city: { 
        fontSize: 40,
    },
    country: {
        fontSize: 30,
    },
    cityText: {
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper:{
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default City