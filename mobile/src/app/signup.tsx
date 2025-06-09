import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

const Signup = () => {
  1;
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
          headerLeft: () => (
            <TouchableOpacity onPress={()=> router.back()}>
              <Ionicons name="close" size={24} color={Colors.black}/>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text>Signup</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Signup;
