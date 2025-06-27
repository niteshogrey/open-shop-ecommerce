import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import axios from "axios";
import { ProductType } from "@/src/types/type";
import ImageSlider from "@/src/components/atoms/imageSlider";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown, SlideInDown } from "react-native-reanimated";

const ProductDetails = () => {
  const { id, productType } = useLocalSearchParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductDetails();
  }, []);
  console.log("ID:", id);
  console.log("productType:", productType);

  const getProductDetails = async () => {
    try {
      const URL =
        productType === "sale"
          ? `http://192.168.29.11:3001/saleProducts/${id}`
          : `http://192.168.29.11:3001/products/${id}`; // replace with actual IP
      const res = await axios.get(URL);
      setProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} />;
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found.</Text>
      </View>
    );
  }

  return (
    <>
      {Platform.OS === "android" ? (
        <Stack.Screen
          options={{
            title: "Product Details",
            headerTransparent: true,
          }}
        />
      ) : (
        <Stack.Screen
          options={{
            title: "Product Details",
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color={Colors.black} />
              </TouchableOpacity>
            ),
          }}
        />
      )}

      <ScrollView
        style={{
          marginTop: verticalScale(84),
          marginBottom: verticalScale(90),
        }}
      >
        {product && (
          <Animated.View entering={FadeInDown.delay(300).duration(500)}>
            <ImageSlider imageList={product.images} />
          </Animated.View>
        )}
        {product && (
          <View style={styles.container}>
            <Animated.View
              style={styles.ratingWrapper}
              entering={FadeInDown.delay(500).duration(500)}
            >
              <View style={styles.ratingWrapper}>
                <Ionicons name="star" size={20} color={"#d4af37"} />
                <Text style={styles.rating}>
                  4.7
                  <Text>(136)</Text>
                </Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={20} />
              </TouchableOpacity>
            </Animated.View>

            <Animated.Text style={styles.title} entering={FadeInDown.delay(700).duration(500)}>{product.title}</Animated.Text>
            <Animated.View style={styles.priceWrapper} entering={FadeInDown.delay(900).duration(500)}>
              <Text style={styles.price}>${product.price}</Text>
              <View style={styles.priceDiscount}>
                <Text style={styles.priceDiscountTxt}>6% Off</Text>
              </View>
              <Text style={styles.oldPrice}>$30</Text>
            </Animated.View>
            <Animated.View style={styles.productVariationWrapper} entering={FadeInDown.delay(1100).duration(500)}>
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Color</Text>
                <View style={styles.productVariationValueWrapper}>
                  <View
                    style={{
                      borderColor: Colors.primary,
                      borderWidth: 1,
                      borderRadius: 100,
                      padding: 2,
                    }}
                  >
                    <View
                      style={[
                        styles.productVariationColorValue,
                        { backgroundColor: "#d4af37" },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#333" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#8bc34a" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#2196f3" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#f44336" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#9c27b0" },
                    ]}
                  />
                </View>
              </View>
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Size</Text>
                <View style={styles.productVariationValueWrapper}>
                  <View
                    style={[
                      styles.productVariationSizeValue,
                      { borderColor: Colors.primary },
                    ]}
                  >
                    <Text
                      style={[
                        styles.productVariationSizeValueTxt,
                        { color: Colors.primary, fontWeight: "bold" },
                      ]}
                    >
                      S
                    </Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueTxt}>M</Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueTxt}>L</Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueTxt}>XL</Text>
                  </View>
                </View>
              </View>
            </Animated.View>

            <Animated.Text style={styles.descriptions} entering={FadeInDown.delay(1300).duration(500)}>{product.description}</Animated.Text>
          </View>
        )}
      </ScrollView>
      {/* <SafeAreaView edges={["bottom"]} > */}
        <Animated.View style={styles.buttonWrapper} entering={SlideInDown.delay(500).duration(500)}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: Colors.white,
              borderColor: Colors.gray,
              borderWidth: 1,
            },
          ]}
        >
          <Ionicons name="cart-outline" size={20} color={Colors.primary} />
          <Text style={[styles.buttonTxt, { color: Colors.primary }]}>
            Add To Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Buy Now</Text>
        </TouchableOpacity>
        </Animated.View>
      {/* </SafeAreaView> */}
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(5),
  },
  rating: {
    fontSize: moderateScale(14),
    marginLeft: scale(5),
    fontWeight: "400",
    color: Colors.gray,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: "400",
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: verticalScale(25),
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(10),
    gap: moderateScale(5),
  },
  price: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: Colors.black,
  },
  priceDiscount: {
    backgroundColor: Colors.extraLightGray,
    padding: scale(4),
    borderRadius: moderateScale(5),
  },
  priceDiscountTxt: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: Colors.primary,
  },
  oldPrice: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    textDecorationLine: "line-through",
    color: Colors.gray,
  },
  descriptions: {
    marginTop: verticalScale(12),
    fontSize: moderateScale(16),
    fontWeight: "400",
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: verticalScale(24),
  },
  productVariationWrapper: {
    flexDirection: "column",
    marginTop: verticalScale(20),
    flexWrap: "wrap",
  },
  productVariationType: {
    width: "100%",
    gap: scale(5),
    marginBottom: verticalScale(10),
  },
  productVariationTitle: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: Colors.black,
  },
  productVariationValueWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(5),
    flexWrap: "wrap",
  },
  productVariationColorValue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.extraLightGray,
  },
  productVariationSizeValue: {
    width: scale(40),
    height: verticalScale(30),
    borderRadius: 5,
    backgroundColor: Colors.extraLightGray,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.lightGray,
    borderWidth: 1,
  },
  productVariationSizeValueTxt: {
    fontSize: moderateScale(12),
    fontWeight: "500",
    color: Colors.black,
  },
  buttonWrapper: {
    position: "absolute",
    height: verticalScale(90),
    padding: scale(20),
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.white,
    flexDirection: "row",
    gap: scale(10),
  },
  button: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.primary,
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    gap: scale(5),
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonTxt: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: Colors.white,
  },
});
