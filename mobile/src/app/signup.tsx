import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import InputField from "../components/atoms/inputField";
import SocialButtons from "../components/molecules/SocialButtons";

const Signup = () => {
  1;
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Create An Account</Text>
        <InputField
          placeholderTextColor={Colors.gray}
          placeholder="Email Address"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
          placeholderTextColor={Colors.gray}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        <InputField
          placeholderTextColor={Colors.gray}
          placeholder="Enter Confirm Password "
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Create an Account</Text>
        </TouchableOpacity>
        <View style={styles.loginRow}>
          <Text style={styles.loginTxt}>Already have an account? </Text>
          <Link href="/signin" asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.divider} />
        <SocialButtons emailHref={'/signin'} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scale(20),
  },
  title: {
    fontSize: moderateScale(24),
    letterSpacing: scale(1.2),
    fontWeight: "600",
    color: Colors.black,
    marginBottom: verticalScale(40),
  },
  btnTxt: {
    fontSize: moderateScale(16),
    color: Colors.white,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  btn: {
    backgroundColor: Colors.primary,
    alignSelf: "stretch",
    paddingVertical: verticalScale(12),
    alignItems: "center",
    borderRadius: moderateScale(5),
  },
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: verticalScale(30),
    justifyContent: "center",
  },
  loginTxt: {
    fontSize: scale(14),
    color: Colors.black,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
  divider:{
    borderTopColor:Colors.gray,
    borderTopWidth:StyleSheet.hairlineWidth,
    width:"80%",
    marginBottom:verticalScale(30)
  }
});
export default Signup;
