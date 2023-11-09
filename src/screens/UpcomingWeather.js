import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItems from '../components/ListItems'


// Hardcoded weather data in a form of an array
const DATA = [
    {
        dt_txt: "2022-08-30 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2022-08-31 12:00:00",
        main: {
            temp_max: 10.25,
            temp_min: 9.15
        },
        weather: [
            {
                main: 'Partly Cloudy'
            }
        ]
    },
    {
        dt_txt: "2022-09-01 18:00:00",
        main: {
            temp_max: 12.75,
            temp_min: 11.85
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    },

]

//ListEmptyComponent Component
const Empty = () => (
    <View>
        <Text>Empty</Text>
    </View>
)



//UpcomingWeather component that displays on App.js
const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItems
        condition={item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min={item.main.temp_min}
        max={item.main.temp_max} 
        />
    )

    // FlatList return that is our UI
    const { container, image } = styles
  return (
    <SafeAreaView style={container}>
        
        <ImageBackground source={require('../../assets/bg.jpg')} style={image}>
        <Text>Upcoming Weather</Text>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
            ListEmptyComponent={<Empty/>}
            
        />
        </ImageBackground>
    </SafeAreaView>
  )
}

// Our style sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }

})
export default UpcomingWeather