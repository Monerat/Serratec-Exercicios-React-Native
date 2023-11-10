import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: StatusBar.currentHeight * 2,
      paddingBottom: 36,
      paddingHorizontal: 28,
   },
   header: {
      flex: 0.3,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
   },
   textBase: {
      textAlign: "center",

      fontSize: 16,
      fontWeight: "400",
      color: "white",
   },
   title: {
      textAlign: "left",

      fontSize: 24,
      fontWeight: "700",
      color: "white",
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
   dataText: {
      color: "white",
      fontSize: 16,
      fontWeight: "700",
   },
   tagsContainer: {
      width: "100%",
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 18,
   },
});
