import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   bgImage:{
      position: "relative",
      flex: 1,
   },
   container:{
      flex:1,
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 18,
   },
   buttonText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
    },
   textBase: {
      textAlign: "center",

      fontSize: 16,
      fontWeight: "400",
      color: "white",
   },
});
