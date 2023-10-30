import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        paddingHorizontal: 42,
     },
     contentContainer:{
        minHeight: "100%",
  
        justifyContent: "space-around",
     },
     formContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
     },
  
     buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        textTransform: "uppercase",
      },

});