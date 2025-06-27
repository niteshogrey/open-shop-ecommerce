import { Colors } from "@/src/constants/colors";
import { ProductType } from "@/src/types/type";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

type Props = {
  item: ProductType;
  index: number;
  productType: "sale" | "regular"
};

const width = Dimensions.get("window").width - 40;
const ProductCard = ({ item, index, productType }: Props) => {
  return (
    <Link href={{
      pathname:`/product-details/[id]`,
      params:{id: item.id, productType: productType}
    }} asChild>
      <TouchableOpacity>
        <Animated.View
          entering={FadeInDown.delay(300 + index * 100).duration(500)}
          style={styles.container}
        >
          <Image source={{ uri: item.images[0] }} style={styles.productImage} />
          <Ionicons
            name="heart-outline"
            color={Colors.black}
            size={24}
            style={styles.wishListBtn}
          />
          <View style={styles.productInfo}>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.ratingWrapper}>
              <Ionicons name="star" size={20} color={"#D4af37"} />
              <Text style={styles.rating}>4.2</Text>
            </View>
          </View>
          <Text style={styles.titleTxt}>{item.title}</Text>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
  },
  productImage: {
    width: "100%",
    height: verticalScale(150),
    borderRadius: scale(15),
    marginBottom: verticalScale(10),
  },
  wishListBtn: {
    position: "absolute",
    right: scale(12),
    top: scale(5),
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: scale(5),
    borderRadius: scale(30),
  },
  titleTxt: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: Colors.black,
    letterSpacing: 1,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(8),
  },
  price: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: Colors.primary,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  rating: {
    fontSize: moderateScale(14),
    color: Colors.gray,
  },
});
export default ProductCard;
