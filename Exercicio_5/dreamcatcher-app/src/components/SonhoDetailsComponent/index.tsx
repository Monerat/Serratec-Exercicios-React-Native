import { RouteProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/StackNavigation";
import { Badge } from "../Badges/Badge";
import { Button } from "../Button";
import { ModalSonho } from "../Modais/ModalSonhos";

import { Sonho } from "../HomeComponent";
import { styles } from "./styles";

type SonhoDetailsRouteProp = RouteProp<RootStackParamList, "Detalhes">;
type SonhoDetailsNavigationProp = StackNavigationProp<RootStackParamList, "SonhosStack" | "FavoritosStack">;

type SonhoDetailsProps = {
   sonhoSelecionado: Sonho;
};

export const SonhoDetailsComponent = ({ sonhoSelecionado }: SonhoDetailsProps) => {
   const nav = useNavigation<SonhoDetailsNavigationProp>();

   const [sonhoEditado, setSonhoEditado] = useState<Sonho | null>(null);
   const [modalAberto, setModalAberto] = useState<boolean>(false);

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.title}>{!sonhoEditado ? sonhoSelecionado.title : sonhoEditado.title}</Text>
            <View style={styles.tagsContainer}>
               {!sonhoEditado
                  ? sonhoSelecionado.tags.length > 0
                     ? sonhoSelecionado.tags.map(tag => {
                          return <Badge key={tag.id} tag={tag} />;
                       })
                     : null
                  : sonhoEditado.tags.map(tag => {
                       return <Badge key={tag.id} tag={tag} />;
                    })}
            </View>
         </View>
         <View style={{ flex: 1, flexDirection: "column", gap: 18 }}>
            <View style={styles.dividerContainer}>
               <Text style={styles.dataText}>{!sonhoEditado ? sonhoSelecionado.data : sonhoEditado.data}</Text>
               <View style={styles.divider} />
            </View>
            <Text style={styles.textBase}>'{!sonhoEditado ? sonhoSelecionado.descricao : sonhoEditado.descricao}</Text>
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
               text="Voltar"
               buttonStyle="text"
               styleAdjustments={{ maxWidth: "50%", minHeight: 50 }}
               onPress={() => nav.goBack()}
            />
            <Button
               text="Editar"
               styleAdjustments={{ maxWidth: "50%", minHeight: 50 }}
               onPress={() => setModalAberto(true)}
            />
         </View>
         {modalAberto && (
            <ModalSonho modal={modalAberto} setModal={setModalAberto} acao="editar" sonhoEdit={sonhoSelecionado} setSonhoEdit={setSonhoEditado} />
         )}
      </View>
   );
};
