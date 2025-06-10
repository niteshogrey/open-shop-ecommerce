import { TextInput, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/src/constants/colors";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
type Props = {};
const InputField = (props: React.ComponentProps<typeof TextInput>) => {
  return <TextInput style={styles.inputField} {...props} />;
};
const styles = StyleSheet.create({
  inputField: {
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(12),
    alignSelf: "stretch",
    borderRadius: scale(5),
    fontSize: moderateScale(16),
    color:Colors.black,
    marginBottom:verticalScale(10)
  },
});
export default InputField;
