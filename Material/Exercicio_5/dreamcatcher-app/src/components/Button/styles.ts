import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   button: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: "5%",
      paddingVertical: "2%",

      borderRadius: 30,
      borderColor: "#DD8EEA",
      borderWidth: 2,
      backgroundColor: "#DD8EEA",

      elevation: 3,
   },
   buttonSecondary: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: "5%",
      paddingVertical: "2%",

      borderRadius: 30,
      borderColor: "#DD8EEA",
      borderWidth: 2,
   },
   buttonVariant: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: "5%",
      paddingVertical: "2%",

      borderRadius: 30,
   },

   buttonText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
   },
   buttonTextSecondary: {
      color: "#DD8EEA",
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
   },
   buttonIcon: {
      padding: "2%",

      borderRadius: 50,
      backgroundColor: "#DD8EEA",
      elevation: 3,
   },
});
