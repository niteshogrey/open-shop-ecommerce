import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import axios from "axios";
import { NotificationType } from "@/src/types/type";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/colors";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {};
const Notifications = (props: Props) => {
  const headerHeight = useHeaderHeight();
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    const URL = `http://192.168.29.11:3001/notifications`;
    const res = await axios.get(URL);
    setNotifications(res.data);
    console.log(notifications);
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Animated.View
              style={styles.notificationWrapper}
              entering={FadeInDown.delay(300 + index * 100).duration(500)}
            >
              <View style={styles.notificationIcon}>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color={Colors.black}
                />
              </View>
              <View style={styles.notificationInfo}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.notificationTitle}>{item.title}</Text>
                  <Text>{item.timestamp}</Text>
                </View>
                <Text style={styles.notificationMessage}>{item.message}</Text>
              </View>
            </Animated.View>
          )}
        />
      </View>
    </>
  );
};

export default Notifications;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  notificationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: scale(10),
    marginBottom: verticalScale(10),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightGray,
    backgroundColor: Colors.extraLightGray,
    borderRadius: 5,
  },
  notificationIcon: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationInfo: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: Colors.black,
  },
  notificationMessage: {
    fontSize: moderateScale(14),
    color: Colors.gray,
    marginTop: verticalScale(5),
    lineHeight: 20,
  },
});
