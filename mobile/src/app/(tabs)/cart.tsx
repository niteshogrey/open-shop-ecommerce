import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CartItemType } from "@/src/types/type";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {};

const Cart = (props: Props) => {
  const [cartData, setCartData] = useState<CartItemType[]>([]);

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = async () => {
    const URL = `http://192.168.29.11:3001/cart`;
    const res = await axios.get(URL);
    console.log(res.data);
    setCartData(res.data);
  };

  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <FlatList
          data={cartData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => <Animated.View entering={FadeInDown.delay(300 + index * 100).duration(500)}><CartItem item={item} /></Animated.View> }
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.priceInfoWrapper}>
          <Text style={styles.totalTxt}>Total: $100</Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutTxt}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const CartItem = ({ item }: { item: CartItemType }) => {
  return (
    <View style={styles.itemWrapper}>
      <Image source={{ uri: item.image }} style={styles.itemImg} />
      <View style={styles.itemInfoWrapper}>
        <Text style={styles.itemTxt}>{item.title}</Text>
        <Text style={styles.itemTxt}>${item.price}</Text>
        <View style={styles.itemControlWrapper}>
          <TouchableOpacity>
            <Ionicons name="trash-outline" size={20} color={"red"} />
          </TouchableOpacity>
          <View style={styles.quantityControlWrapper}>
            <TouchableOpacity style={styles.quantityControl}>
              <Ionicons name="add-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity style={styles.quantityControl}>
              <Ionicons name="remove-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={20} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: scale(10),
    marginBottom: verticalScale(10),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightGray,
    borderRadius: 5,
  },
  itemImg: {
    height: verticalScale(100),
    width: scale(100),
    borderRadius: 5,
    marginRight: 10,
  },
  itemInfoWrapper: {
    flex: 1,
    alignSelf: "flex-start",
    gap: 10,
  },
  itemTxt: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: Colors.black,
  },
  itemControlWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityControlWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  quantityControl: {
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 5,
  },
  footer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: Colors.white,
  },
  priceInfoWrapper: {
    flex:1,
    justifyContent:'center'
  },
  totalTxt: {
    fontSize: moderateScale(16),
    fontWeight:'500',
    color: Colors.black
  },
  checkoutBtn: {
    flex:1,
    backgroundColor: Colors.primary,
    height: verticalScale(30),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  checkoutTxt: {
    fontSize:moderateScale(16),
    fontWeight:'500',
    color:Colors.white
  },
});
