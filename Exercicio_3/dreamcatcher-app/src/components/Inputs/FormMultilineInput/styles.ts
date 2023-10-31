import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    formInputContainer: {
      flex: 4,

      flexDirection: "column",
      alignItems: "stretch",
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
     textMultilineInput: {
        minHeight: 114,
        flex: 1,
  
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
})