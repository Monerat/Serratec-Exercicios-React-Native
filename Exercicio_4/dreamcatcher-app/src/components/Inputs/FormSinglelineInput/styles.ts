import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   formInputContainer: {
      flex: 1,

      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
   },
   inputLabel: {
      fontSize: 20,
      textAlign: "left",
      fontWeight: "700",
      color: "white",
   },
   textBase: {
      textAlign: "center",

      fontSize: 16,
      fontWeight: "400",
      color: "white",
   },
   textInput: {
      width: "100%",
      minHeight: 32,

      flex: 1,
      paddingHorizontal: 14,
      paddingVertical: 7,

      color: "white",

      borderRadius: 21,
      borderBottomWidth: 3.5,
      borderBottomColor: "#5C5FB2",
      backgroundColor: "#0000001A",

      fontSize: 18,
   },
});
