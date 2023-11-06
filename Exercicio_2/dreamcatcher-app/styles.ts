import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   bgImage:{
      position: "relative",
      flex: 1,
   },

   container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      paddingTop: StatusBar.currentHeight*2,
   },

   scroll: {
      width: "85%",
      flex: 1,
      paddingBottom: 48
   },

   formContainer: {
      width: "85%",
      flex: 0.8,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
   },
   formInputContainer: {
      width: "100%",

      flexDirection: "column",
      gap: 4,
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
   textMultilineInput: {
      height: 114,
      maxHeight: 114,

      paddingHorizontal: 14,
      paddingVertical: 7,

      borderRadius: 21,
      borderBottomWidth: 3.5,
      borderBottomColor: "#5C5FB2",
      backgroundColor: "#0000001A",

      fontSize: 18,
      textAlignVertical: "top",
      color: "white",
   },

   button: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 42,
      paddingVertical: 10,

      borderRadius: 30,
      backgroundColor: "#DD8EEA",

      elevation: 3
   },
   buttonIcon: {
      padding: "2%",
   },
   buttonText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
   },

   card: {
      width: "100%",
      marginVertical: 20,

      flex: 1,
      flexDirection: "column",
      padding: "5%",
      gap: 12,

      borderRadius: 13,
      backgroundColor: "#5C5FB2",
   },
   cardTitulo: {
      color: "white",
      fontSize: 18,
      fontWeight: "700",
   },
   cardText: {
      margin: 4,

      color: "white",
      fontSize: 14,
      lineHeight: 14,
   },
});
