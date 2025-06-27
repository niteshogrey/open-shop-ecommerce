import { StyleSheet, View, Platform } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "@/src/constants/colors";
import TabBarButton from "../atoms/tabBarButton";
import { verticalScale } from "react-native-size-matters";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
  const tabPositionX = useSharedValue(0);
  const buttonWidth = dimensions.width / state.routes.length;

  useEffect(() => {
    tabPositionX.value = withTiming(buttonWidth * state.index, { duration: 200 });
  }, [state.index]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: tabPositionX.value }],
  }));

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
      <View onLayout={(e) =>
        setDimensions({
          height: e.nativeEvent.layout.height,
          width: e.nativeEvent.layout.width,
        })
      } style={styles.tabBar}>
        <Animated.View
          style={[
            animatedStyle,
            {
              position: "absolute",
              backgroundColor: Colors.primary,
              top: 0,
              left: 20,
              width: 40,
              height: 2,
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({ type: "tabLongPress", target: route.key });
          };

          return (
            <TabBarButton
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              routeName={route.name}
              label={label}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingBottom: Platform.OS === "ios" ? 5 : 5,
    paddingTop: verticalScale(15),
    backgroundColor: "#fff",
  },
});
