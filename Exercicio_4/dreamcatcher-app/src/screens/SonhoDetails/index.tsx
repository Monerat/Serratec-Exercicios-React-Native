import { useState } from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";

import GatoLogo from "../../assets/gato-logo-3-no-bg.png";
import BgImage from "../../assets/bg-padrao.png";

import { Button } from "../../components/Button";
import { ModalSonho } from "../../components/Modais/ModalSonhos";
import { RootStackParamList } from "../../routes/StackNavigation";

import { styles } from "./styles";
import { Badge } from "../../components/Badges/Badge";
import { Sonho } from "../Home";
import { StackNavigationProp } from "@react-navigation/stack";

type SonhoDetailsRouteProp = RouteProp<RootStackParamList, "Detalhes">;
type SonhoDetailsNavigationProp = StackNavigationProp<RootStackParamList, "SonhosStack" | "FavoritosStack">;

type SonhoDetailsProps = {
   route: SonhoDetailsRouteProp;
};

export const SonhoDetails = ({ route }: SonhoDetailsProps) => {
   const nav = useNavigation<SonhoDetailsNavigationProp>();
   const sonho = route.params.sonhoSelecionado;

   const [sonhoEditado, setSonhoEditado] = useState<Sonho | null>(null);
   const [modalAberto, setModalAberto] = useState<boolean>(false);

   const editarSonho = (sonhoEditado: Sonho) => {
      alert(JSON.stringify(sonhoEditado));
      setSonhoEditado(sonhoEditado);
   };

   return (
      <ImageBackground
         source={BgImage}
         style={{ flex: 1, position: "relative" }}
         imageStyle={{ position: "absolute", left: 0 }}>
         <View style={styles.container}>
            <View style={styles.header}>
               <Text style={styles.title}>{!sonhoEditado ? sonho.title : sonhoEditado.title}</Text>
               <View style={styles.tagsContainer}>
                  {(!sonhoEditado ? sonho.tags.length > 0 : sonhoEditado.tags.length > 0) &&
                     sonho.tags.map(tag => {
                        return <Badge key={tag.id} tag={tag} />;
                     })}
               </View>
            </View>
            <View style={{ flex: 1, flexDirection: "column", gap: 18, }}>
               <View style={styles.dividerContainer}>
                  <Text style={styles.dataText}>
                     {!sonhoEditado ? sonho.data : sonhoEditado.data}
                  </Text>
                  <View style={styles.divider} />
               </View>
               <Text style={styles.textBase}>'{!sonhoEditado ? sonho.descricao : sonhoEditado.descricao}</Text>
            </View>
            <View
               style={{
                  flex: 0.2,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 14,
               }}>
               <Button
                  value="Voltar"
                  buttonStyle="text"
                  styleAdjustments={{ maxWidth: "50%", minHeight: 50 }}
                  onPress={() => {console.log(JSON.stringify(nav.getState()) ); nav.goBack() }}
               />
               <Button
                  value="Editar"
                  styleAdjustments={{ maxWidth: "50%", minHeight: 50 }}
                  onPress={() => setModalAberto(true)}
               />
            </View>
            {modalAberto && (
               <ModalSonho
                  modal={modalAberto}
                  setModal={setModalAberto}
                  salvar={editarSonho}
                  acao="editar"
                  sonhoEdit={sonho}
               />
            )}
         </View>
      </ImageBackground>
   );
};
