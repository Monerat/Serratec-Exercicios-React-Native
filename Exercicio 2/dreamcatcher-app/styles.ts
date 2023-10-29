import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   bgImage:{
      position: "relative",
      flex: 1,
   },

   scroll: {
      flex: 1,
      paddingHorizontal: 42,
   },
   contentContainer:{
      minHeight: "100%",

      justifyContent: "space-around",
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 48,
   },

   sonhoContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 28,
      gap: 8,
   },

   formContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
   },

   textBase: {
      textAlign: "center",

      fontSize: 16,
      fontWeight: "400",
      color: "white",
   },
      buttonText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
   },
});
