import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { PlatformPressable } from "@react-navigation/elements";
import { Colors } from "@/src/constants/colors";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { icons } from "@/src/constants/icons";

type Props = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  label: string;
};

const TabBarButton = (props: Props) => {
  const { onPress, onLongPress, routeName,isFocused, label } = props;
  return (
    <PlatformPressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarBtn}
    >
      {
        routeName === 'cart' && (
          <View style={styles.badgeWrapper}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        )
      }
      {icons[routeName]({
        color: isFocused ? Colors.primary : Colors.black
      })}
      <Text
        style={{
          color: isFocused ? Colors.primary : Colors.black,
          fontWeight: isFocused ? "bold" : "normal", fontSize: moderateScale(11)
        }}
      >
        {label}
      </Text>
    </PlatformPressable>
  );
};
const styles = StyleSheet.create({
  tabBarBtn: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    gap:scale(10)
  },
  badgeWrapper:{
    position:'absolute',
    backgroundColor: Colors.highlight,
    borderRadius: 50,
    top: verticalScale(-5),
    right: scale(12),
    paddingVertical: verticalScale(1),
    paddingHorizontal: scale(6),
    zIndex:10
  },
  badgeText:{
    color: Colors.black,
    fontSize: moderateScale(12)
  }
});
export default TabBarButton;
