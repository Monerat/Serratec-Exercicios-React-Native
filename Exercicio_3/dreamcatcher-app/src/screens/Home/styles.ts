import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      gap: 28,
   },
   sonhoContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 28,
   },
   textBase: {
      textAlign: "center",

      fontSize: 16,
      fontWeight: "400",
      color: "white",
   },
});
