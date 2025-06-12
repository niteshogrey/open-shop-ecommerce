import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";
export const icons = {
  index: ({ color }: { color: string }) => <Ionicons name="home-outline" size={24} color={color} />,
  explore: ({ color }: { color: string }) => <Ionicons name="search-outline" size={24} color={color} />,
  notifications: ({ color }: { color: string }) => <Ionicons name="notifications-outline" size={24} color={color} />,
  cart: ({ color }: { color: string }) => <Ionicons name="cart-outline" size={24} color={color} />,
 profile: ({ color }: { color: string }) => (
  <Image
    source={{
      uri: "https://variety.com/wp-content/uploads/2013/04/ironman3_tonystark.jpg?w=1000&h=667&crop=1",
    }}
    style={[styles.userImage, { borderColor: color, borderWidth: 1 }]} // use color for border
  />
),

};

const styles = StyleSheet.create({
  userImage:{
    height:25,
    width:25, 
    borderRadius:20
  }
})