import { StyleSheet, Text, View, StatusBar, ImageBackground } from "react-native";

import BgImage from "./src/assets/bg-padrao.png";

export default function App() {
   return (
      <ImageBackground source={BgImage} style={styles.bgImage} imageStyle={{ position: 'absolute', left: 0 }}>
         <View style={styles.container}>
            <Text style={{ color: "white" }}>Open up App.js to start working on your app!</Text>
         </View>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   bgImage: {
      flex: 1,
      paddingHorizontal: 8,
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 4,

      position: "relative",

      backgroundColor: "white",
   },
   container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
   },
});
