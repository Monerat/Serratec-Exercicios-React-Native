import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   formInputHorizontal: {
      width: "100%",

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
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
   inputDisabled: {
      minHeight: 32,

      flex: 1,
      paddingHorizontal: 14,
      paddingVertical: 7,

      color: "#ffffff80",

      borderRadius: 21,
      borderBottomWidth: 3.5,
      borderBottomColor: "#5C5FB280",
      backgroundColor: "#00000005",

      fontSize: 18,
   },
});
