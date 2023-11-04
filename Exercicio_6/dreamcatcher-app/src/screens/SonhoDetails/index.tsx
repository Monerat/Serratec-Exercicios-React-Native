import { ImageBackground } from "react-native";
import { RouteProp } from "@react-navigation/native";


import BgImage from "../../assets/bg-padrao.png";

import { RootStackParamList } from "../../routes/StackNavigation";

import { StackNavigationProp } from "@react-navigation/stack";
import { SonhoDetailsComponent } from "../../components/SonhoDetailsComponent";

type SonhoDetailsRouteProp = RouteProp<RootStackParamList, "Detalhes">;
type SonhoDetailsNavigationProp = StackNavigationProp<RootStackParamList, "SonhosStack" | "FavoritosStack">;

type SonhoDetailsProps = {
   route: SonhoDetailsRouteProp;
};

export const SonhoDetails = ({ route }: SonhoDetailsProps) => {
   const sonhoSelecionado = route.params.sonhoSelecionado;

   return (
      <ImageBackground
         source={BgImage}
         style={{ flex: 1, position: "relative" }}
         imageStyle={{ position: "absolute", left: 0 }}>
         <SonhoDetailsComponent sonhoSelecionado={sonhoSelecionado} />
      </ImageBackground>
   );
};
