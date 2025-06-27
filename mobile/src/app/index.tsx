import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import ImagePath from "../constants/ImagePath";
import { LinearGradient } from "expo-linear-gradient";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../constants/colors";
import Animated, { FadeInRight } from "react-native-reanimated";
import SocialButtons from "../components/molecules/SocialButtons";

type Props = {};
const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={ImagePath.splash}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(255, 255, 255, 0.9)",
              "rgba(255, 255, 255, 1)",
            ]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <Animated.Text
                style={styles.title}
                entering={FadeInRight.delay(300).duration(300).springify()}
              >
                ShopX
              </Animated.Text>
              <Animated.Text
                style={styles.description}
                entering={FadeInRight.delay(500).duration(300).springify()}
              >
                One Stop Solution for all Your Needs
              </Animated.Text>
              <SocialButtons emailHref={"/signup"} />
              <View style={styles.loginRow}>
                <Text style={styles.loginTxt}>Already have an account? </Text>
                <Link href="/signin" asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginTxtSpan}>Sign In</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: verticalScale(50),
    paddingHorizontal: moderateScale(20),
    alignItems: "center",
  },
  title: {
    color: Colors.primary,
    fontWeight: "700",
    fontSize: scale(22),
    letterSpacing: 2.4,
    marginBottom: verticalScale(5),
  },
  description: {
    fontSize: scale(14),
    letterSpacing: 1.2,
    lineHeight: verticalScale(30),
    marginBottom: verticalScale(20),
  },

  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(30),
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
});
export default WelcomeScreen;
