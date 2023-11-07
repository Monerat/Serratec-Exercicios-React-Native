import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/StackNavigation";
import { Button } from "../Button";

import { Sonho } from "../HomeComponent";
import { styles } from "./styles";

type SonhoDetailsNavigationProp = StackNavigationProp<RootStackParamList, "SonhosStack" | "FavoritosStack">;

type SonhoDetailsProps = {
   sonhoSelecionado: Sonho;
};

export const SonhoDetailsComponent = ({ sonhoSelecionado }: SonhoDetailsProps) => {
   const nav = useNavigation<SonhoDetailsNavigationProp>();
   const [sonhoEditado, setSonhoEditado] = useState<Sonho | null>(null);

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.title}>{!sonhoEditado ? sonhoSelecionado.title : sonhoEditado.title}</Text>
         </View>
         <View style={{ flex: 1, flexDirection: "column", gap: 18 }}>
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
               onPress={() => console.log("Botao Editar Clicado")}
            />
         </View>
      </View>
   );
};
