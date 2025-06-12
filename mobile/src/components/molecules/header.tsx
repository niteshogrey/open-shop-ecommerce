import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Link } from "expo-router";

type Props = {};

const Header = (props: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.logo}>ShopX</Text>
      <Link href={"/explore"} asChild>
        <TouchableOpacity style={styles.searchBar}>
          <Text style={{color:Colors.gray, fontSize:moderateScale(14)}}>Search</Text>
          <Ionicons name="search-outline" size={20} color={Colors.gray} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(10),
    gap: moderateScale(15),
  },
  logo: {
    fontSize: moderateScale(24),
    fontWeight: "700",
    color: Colors.primary,
  },
  searchBar: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: 5,
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
});

export default Header;
