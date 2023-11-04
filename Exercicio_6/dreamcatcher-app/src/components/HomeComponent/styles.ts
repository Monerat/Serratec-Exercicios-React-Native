import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      paddingTop: StatusBar.currentHeight * 2,

      gap: 18,
   },
   headerText: {
      color: "white",
      fontSize: 24,
      textTransform: "capitalize",
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
