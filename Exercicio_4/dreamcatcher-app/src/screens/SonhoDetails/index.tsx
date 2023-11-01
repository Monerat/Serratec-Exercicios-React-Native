import { useState } from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import { RouteProp } from "@react-navigation/native";

import SleepingCat from "../../assets/sleeping-icon.png";
import BgImage from "../../assets/bg-padrao.png";

import { Button } from "../../components/Button";
import { ModalSonho } from "../../components/Modais/ModalSonhos";
import { RootStackParamList } from "../../routes/StackNavigation";

import { styles } from "./styles";

type SonhoDetailsRouteProp = RouteProp<RootStackParamList, "Detalhes">;

type SonhoDetailsProps = {
   route: SonhoDetailsRouteProp;
};

export const SonhoDetails = ({ route }: SonhoDetailsProps) => {
   const { id } = route.params;
   const [modalAberto, setModalAberto] = useState<boolean>(false);

   const editarSonho = () => {
      console.log(JSON.stringify(route.params));
   };

   return (
      <ImageBackground
         source={BgImage}
         style={{ flex: 1, position: "relative" }}
         imageStyle={{ position: "absolute", left: 0 }}>
         <View style={styles.container}>
            <View style={{ flex: 0.2, justifyContent: "flex-end" }}>
               <Button
                  value="Editar Sonhão"
                  styleAdjustments={{ maxWidth: "50%", maxHeight: "50%", minHeight: 50 }}
                  onPress={() => setModalAberto(true)}
               />
            </View>
            <View style={styles.sonhoContainer}>
               <Image source={SleepingCat} style={{ tintColor: "white" }} />
               <Text style={styles.textBase}>Uau você chegou no sonho '{id}', que incrível.</Text>
            </View>
            {modalAberto && (
               <ModalSonho modal={modalAberto} setModal={setModalAberto} salvar={editarSonho} acao="criar" />
            )}
         </View>
      </ImageBackground>
   );
};
