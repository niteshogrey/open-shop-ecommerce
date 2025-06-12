import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoryType, ProductType } from "@/src/types/type";
import { Stack } from "expo-router";
import Header from "@/src/components/molecules/header";
import ProductList from "@/src/components/molecules/productList";
import Category from "@/src/components/molecules/category";
import FlashSale from "@/src/components/molecules/flashSale";
import { Image, ScrollView, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

type Props = {};
const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [saleProducts, setSaleProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    getProducts();
    getCategories();
    getSaleProducts();
  }, []);

  const getProducts = async () => {
    const URL = `http://172.20.10.3:3001/products`;
    const res = await axios.get(URL);
    setProducts(res.data);
    // console.log(res.data);
  };

    const getCategories = async () => {
    const URL = `http://172.20.10.3:3001/categories`;
    const res = await axios.get(URL);
    setCategories(res.data);
    // console.log(res.data);
  };

    const getSaleProducts = async () => {
    const URL = `http://172.20.10.3:3001/saleProducts`;
    const res = await axios.get(URL);
    setSaleProducts(res.data);
    // console.log(res.data);
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <ScrollView>

      <Category categories={categories} />
      <FlashSale products= {saleProducts} />
      <View style={{marginHorizontal:scale(20), marginVertical:verticalScale(5)}}>
        <Image source={{uri: "https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5177.jpg?semt=ais_hybrid&w=740"}}
         style={{width:"100%", height: verticalScale(150), borderRadius:15}}
        />
      </View>
      <ProductList products={products} flatlist={false} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
