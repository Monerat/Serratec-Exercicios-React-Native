import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   bgImage: {
      position: "relative",
      overflow: "scroll",

      flex: 1,
      justifyContent: "space-around",
      paddingHorizontal: 42,
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 4,
      gap: 28,

      backgroundColor: "white",
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
   formInputContainer: {
      width: "100%",

      flexDirection: "column",
      gap: 4,
   },
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
      flex: 1,
      paddingHorizontal: 14,
      paddingVertical: 7,

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
      alignSelf: "flex-end",
      marginTop: 28,

      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 42,
      paddingVertical: 10,

      borderRadius: 30,
      backgroundColor: "#DD8EEA",
   },
   buttonIcon: {  
    padding: 6,

      borderRadius: 50,
      backgroundColor: "#DD8EEA",
   },
   buttonText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
   },
});
