import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
   dividerContainer: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 10.5,
   },
   divider: {
      width: "100%",
      height: 0,
      maxWidth: "70%",

      borderBottomColor: "white",
      borderBottomWidth: 1,
   },
   cardText: {
      margin: 4,

      color: "white",
      fontSize: 14,
      lineHeight: 14,
   },
   tagsContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12,
   },
});
