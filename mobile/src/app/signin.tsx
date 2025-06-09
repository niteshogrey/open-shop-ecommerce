import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>SignIn </Text>
        {/* <Link href={"/(tabs)"}> */}
            <TouchableOpacity onPress={()=>{
                router.dismissAll()
                router.push("/(tabs)")
            }}>
                <Text>Go to Home screen</Text>
            </TouchableOpacity>
        {/* </Link> */}
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})