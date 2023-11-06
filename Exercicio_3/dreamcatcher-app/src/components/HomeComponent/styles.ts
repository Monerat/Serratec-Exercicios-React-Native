import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      paddingTop: StatusBar.currentHeight * 2,
      paddingHorizontal: 36,
   },
   formContainer: {
      width: "100%",
      flex: 0.8,
      flexDirection: "column",
      gap: 40
   },
   contentContainer:{
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 16,
      gap: 32,
   },
   textBase: {
      textAlign: "center",

      fontSize: 16,
      fontWeight: "400",
      color: "white",
   },
});
