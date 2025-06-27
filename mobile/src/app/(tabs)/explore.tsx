import { View, FlatList, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { CategoryType } from "@/src/types/type";
import axios from "axios";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "@/src/constants/colors";
import Animated, { FadeInDown } from "react-native-reanimated";

const Explore = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const headerHeight = useHeaderHeight();

  const getCategories = async () => {
    const URL = `http://192.168.29.11:3001/categories` ;
    const res = await axios.get(URL);
    setCategories(res.data);
    // console.log(res.data);
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <FlatList
          data={categories}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Animated.View style={styles.itemWrapper} entering={FadeInDown.delay(300 + index * 100).duration(500)}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Image
                source={{ uri: item.image }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
            </Animated.View>
          )}
        />
      </View>
    </>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.extraLightGray,
    padding: scale(10),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(20),
  },
  itemTitle: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: Colors.black,
  },
});
