import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      paddingTop: StatusBar.currentHeight,

      gap: 18
   },
   sonhoContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 64,
   },
   textBase: {
      textAlign: "center",

      fontSize: 16,
      fontWeight: "400",
      color: "white",
   },
});
