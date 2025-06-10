import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Colors } from "@/src/constants/colors";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Href, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Google from "@/assets/images/google-logo.svg";
type Props = {
  emailHref: Href<string | object>;
};

const SocialButtons = (props: Props) => {
    const {emailHref} = props
  return (
    <View style={styles.socialLoginWrapper}>
      <Animated.View entering={FadeInDown.delay(300).duration(500)}>
        <Link href={emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail-outline" size={20} color={Colors.black} />
            <Text style={styles.btnText}>Continuew with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(700).duration(500)}
        style={styles.socialLoginWrapper}
      >
        <TouchableOpacity style={styles.button}>
          <Google width={20} height={20} />
          <Text style={styles.btnText}>Continuew with Google</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(1100).duration(500)}
        style={styles.socialLoginWrapper}
      >
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-apple" size={20} color={Colors.black} />
          <Text style={styles.btnText}>Continuew with Apple</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  socialLoginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(5),
    marginBottom: verticalScale(15),
  },
  btnText: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: Colors.black,
  },
});
export default SocialButtons;
