import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native";

import { Home } from "./src/screens/Home";

import BgImage from "./src/assets/bg-padrao.png";

import { styles } from "./styles";

export default function App() {
   return (
      <ImageBackground source={BgImage} style={styles.bgImage} imageStyle={{ position: "absolute", left: 0 }}>
         <StatusBar style="light" />

         <Home />
      </ImageBackground>
   );
}
