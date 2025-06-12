import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { CategoryType } from "@/src/types/type";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "@/src/constants/colors";

type Props = {
  categories: CategoryType[];
};

const Category = ({ categories }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: moderateScale(20) }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.categoryImg} />
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(20),
    marginTop: verticalScale(10),
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleBtn: {
    fontSize: moderateScale(14),
    fontWeight: "500",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  item: {
    gap: moderateScale(5),
    marginVertical: verticalScale(10),
    alignItems: "center",
  },
  categoryImg: {
    width: verticalScale(50),
    height: verticalScale(50),
    borderRadius: moderateScale(50),
  },
});
