import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native";

import { TabRoutes } from "./src/routes/BottomTabNavigation";
import BgImage from "./src/assets/bg-padrao.png";

export default function App() {
   return (
      <ImageBackground
         source={BgImage}
         style={{ flex: 1, position: "relative" }}
         imageStyle={{ position: "absolute", left: 0 }}>
         <StatusBar style="light" />

         <TabRoutes />
      </ImageBackground>
   );
}
