import { ImageBackground } from "react-native";

import BgImage from "../../assets/bg-padrao.png";
import { HomeComponent } from "../../components/HomeComponent";

export const Home = () => {
   return (
      <ImageBackground
         source={BgImage}
         style={{ flex: 1, position: "relative" }}
         imageStyle={{ position: "absolute", left: 0 }}>
            
         <HomeComponent />
      </ImageBackground>
   );
};
