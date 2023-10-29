import { StatusBar, StyleSheet } from "react-native";

   export const styles = StyleSheet.create({
       bgImage: {
          position: "relative",
    
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
          marginTop: 28,
          gap: 8,
       },
    
       formContainer: {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
       },
       formInputHorizontal:{
        width: "100%",
        gap: 4,
       },
       formInputContainer: {
          width: "100%",
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
    
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingHorizontal: 14,
          paddingVertical: 7,
    
          borderRadius: 21,
          borderBottomWidth: 3.5,
          borderBottomColor: "#5C5FB2",
          backgroundColor: "#0000001A",
    
          color: "white",
          fontSize: 18,
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
       buttonText: {
          color: "white",
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "uppercase",
       },
    });