import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props ={}
const HomeScreen = (props:Props) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    }
})
export default HomeScreen