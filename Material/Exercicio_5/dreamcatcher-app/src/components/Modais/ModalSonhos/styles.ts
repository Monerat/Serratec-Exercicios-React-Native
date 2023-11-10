import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   modalContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",

      backgroundColor: "#00000070",
   },
   modalView: {
      width: "90%",
      maxHeight: "90%",

      alignItems: "center",
      justifyContent: "center",
      
      backgroundColor: "#0C1C5B",
      borderRadius: 20,
   
      elevation: 5,
   },
   formContainer: {
      paddingTop: 16,
      paddingBottom: 32,
   },
   contentContainer:{
      width: "100%",
      justifyContent: "center",
      alignItems: "stretch",
      paddingVertical: 16,
      paddingHorizontal: 24,
      gap: 32,

   },

   buttonText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
   },
});
