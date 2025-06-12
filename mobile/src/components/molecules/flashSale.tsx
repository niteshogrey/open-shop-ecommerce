import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "@/src/constants/colors";
import { ProductType } from "@/src/types/type";
import ProductCard from "./productCard";
import ProductList from "./productList";

type Props = {
  products: ProductType[];
};

const FlashSale = ({ products }: Props) => {
  const saleEndDate = new Date();
  // saleEndDate.setFullYear(2025, 6, 15)
  saleEndDate.setDate(saleEndDate.getDate() + 2);
  saleEndDate.setHours(23, 59, 59);

  const [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeUnits = (timeDifference: number) => {
      const seconds = Math.floor(timeDifference / 1000);
      setTimeUnits({
        days: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
        hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.floor((seconds % (60 * 60)) / 60),
        seconds: seconds % 60,
      });
    };

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const expiryTime = saleEndDate.getTime();
      const timeDifference = expiryTime - currentDate;

      if (timeDifference <= 0) {
        calculateTimeUnits(0);
      } else {
        calculateTimeUnits(timeDifference);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <View style={styles.timerWrapper}>
          <Text style={styles.title}>Flash Sale</Text>
          <View style={styles.timer}>
            <Ionicons name="time-outline" size={16} color={Colors.black} />
            <Text style={styles.timerTxt}>{`${formatTime(
              timeUnits.days
            )}:${formatTime(timeUnits.hours)}:${formatTime(
              timeUnits.minutes
            )}:${formatTime(timeUnits.seconds)}`}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See all</Text>
        </TouchableOpacity>
      </View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: moderateScale(20) }}
          renderItem={({ index, item }) => (
            <ProductCard item={item} index={index} />
          )}
        />
    </View>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(20),
    marginVertical: verticalScale(20),
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:verticalScale(10)
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
  timerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  timer: {
    flexDirection: "row",
    gap: moderateScale(5),
    backgroundColor: Colors.highlight,
    paddingHorizontal: scale(5),
    paddingVertical: verticalScale(5),
    borderRadius: 12,
  },
  timerTxt: {
    fontWeight: "500",
    color: Colors.black,
  },
});
