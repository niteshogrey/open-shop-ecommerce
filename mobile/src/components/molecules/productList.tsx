import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ProductType } from "@/src/types/type";
import ProductCard from "@/src/components/molecules/productCard";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Colors } from "@/src/constants/colors";

type Props = {
  products: ProductType[];
  flatlist: boolean;
};

const ProductList = ({ products, flatlist = true }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>For Your</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See all</Text>
        </TouchableOpacity>
      </View>
      {flatlist ? (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: verticalScale(20),
          }}
          renderItem={({ index, item }) => (
            <ProductCard item={item} index={index} />
          )}
        />
      ) : (
        <View style={styles.itemsWrapper}>
          {products.map((item, index) => (
            <View key={index} style={styles.productWrapper}>
              <ProductCard item={item} index={index} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(20),
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(10),
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
  itemsWrapper:{
    width:'100%',
    flexDirection:'row',
    flexWrap:"wrap",
   

  },
  productWrapper:{
    width:'50%',
    paddingLeft:scale(5),
    marginBottom: verticalScale(20),
  }
});
export default ProductList;
