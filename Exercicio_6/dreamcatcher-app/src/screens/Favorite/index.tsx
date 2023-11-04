import { ImageBackground } from "react-native";
import BgImage from "../../assets/bg-padrao.png";

import { FavoritesComponent } from "../../components/FavoritesComponent";

export const Favorite = () => {
   return (
      <ImageBackground
         source={BgImage}
         style={{ flex: 1, position: "relative" }}
         imageStyle={{ position: "absolute", left: 0 }}>
         <FavoritesComponent />
      </ImageBackground>
   );
};
