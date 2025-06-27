import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Colors } from '@/src/constants/colors'


type Props = {
    items: string[],
    paginationIndex: number
}

const Pagination = (props: Props) => {
    console.log(props.items);
    
  return (
    <View style={styles.container}>
        {props.items.map((item, index)=>(
            <View key={index} style={[styles.paginationDots, {backgroundColor: props.paginationIndex === index ? Colors.primary : "#ccc"}]}></View>
        ))}
        <View style={styles.paginationNumberContainer}>
            <View style={styles.paginationNumberBox}>
                <Text style={styles.paginationText}>{props.paginationIndex+1}/{props.items.length}</Text>
            </View>
        </View>
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        height: verticalScale(40),
        justifyContent: 'center',
        alignItems: 'center'
    },
    paginationDots:{
        width: scale(30),
        height: verticalScale(4),
        borderRadius: moderateScale(5),
        margin: verticalScale(3),
    },
    paginationNumberContainer:{
        position:'absolute',
        alignItems:'flex-end',
        width: '100%',
        paddingRight: 20
    },
    paginationNumberBox:{
        backgroundColor: "#e4e4e4",
        paddingHorizontal:scale(8),
        paddingVertical: verticalScale(2),
        borderRadius: moderateScale(50)
    },
    paginationText:{
        color: Colors.primary,
        fontSize: moderateScale(12)
    }
})