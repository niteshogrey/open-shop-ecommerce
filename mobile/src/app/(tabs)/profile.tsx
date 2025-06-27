import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {};
const Profile = (prop: Props) => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://variety.com/wp-content/uploads/2013/04/ironman3_tonystark.jpg?w=1000&h=667&crop=1",
            }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text style={styles.userName}>Nitesh Ogrey</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="person-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonTxt}>Your Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="heart-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonTxt}>Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="card-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonTxt}>Payment History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="gift-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonTxt}>Reward points</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="help-circle" size={20} color={Colors.black} />
            <Text style={styles.buttonTxt}>Customer Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="pencil-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonTxt}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="settings-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonTxt}>Settings</Text>
          </TouchableOpacity><TouchableOpacity style={styles.button}>
            <Ionicons name="log-out-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonTxt}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    padding: scale(20),
  },
  userName: {
    fontSize: moderateScale(20),
    fontWeight: "500",
    marginTop: verticalScale(10),
    color: Colors.black,
  },
  buttonWrapper: {
    gap: moderateScale(10),
    marginTop: verticalScale(20),
  },
  button: {
    padding: scale(10),
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonTxt: {
    fontSize: moderateScale(14),
    fontWeight: "500",
    color: Colors.black,
  },
});
