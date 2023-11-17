import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
const [ count, setCount ] = useState(0)
const [ newCount, setNewCount ] = useState(0)
useEffect(() => {
    console.log(`Count Change`)
    return () => {
        console.log('useEffect Clean Up')
    }
}, [count])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={"red"}
        title={"Increase the count"}
        onPress={() => {
         setCount(count +1)
        }}
      />
      <Button
        color={"green"}
        title={"decrease count"}
        onPress={() => setCount(count - 1)}
      />
          <Button
        color={"red"}
        title={"Increase the count"}
        onPress={() => {
         setNewCount(count +1)
        }}
      />
      <Button
        color={"green"}
        title={"decrease count"}
        onPress={() => setNewCount(count - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
});

export default Counter;
