import { Dimensions, FlatList, Image,  View, ViewToken } from "react-native";
import React, { useRef, useState } from "react";
import {  scale, verticalScale } from "react-native-size-matters";
import Pagination from "./pagination";

type Props = {
  imageList: string[];
};

const width = Dimensions.get("screen").width

const ImageSlider = ({ imageList }: Props) => {
    const [paginationIndex, setPaginationIndex] = useState(0)
    const onViewableItemsChanged = ({viewableItems,}: {viewableItems: ViewToken[] })=>{
        if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
            setPaginationIndex(viewableItems[0].index % imageList.length)
        }
    }
    const viewabilityConfig = { itemVisiblePercentThreshold : 50}
    const viewabilityConfigCallbackPairs = useRef([
        {viewabilityConfig, onViewableItemsChanged}
    ])
  return (
    <View>
      <FlatList
        data={imageList}
        horizontal
        showsHorizontalScrollIndicator= {false}
        pagingEnabled
        renderItem={({ item }) => (
          <View style={{width: width, justifyContent:"center", alignItems:"center" }}>
            <Image source={{ uri: item }} style={{height: verticalScale(250), width: scale(250), borderRadius:15,} } />
          </View>
        )}
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <Pagination items={imageList} paginationIndex={paginationIndex} />
    </View>
  );
};

export default ImageSlider;

