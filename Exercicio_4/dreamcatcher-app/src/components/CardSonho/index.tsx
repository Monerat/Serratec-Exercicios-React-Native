import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";

import StarOff from "../../assets/favorite-false.png";
import StarOn from "../../assets/favorite-true.png";
import { RootStackParamList } from "../../routes/StackNavigation";
import { Sonho } from "../HomeComponent";

import { Button } from "../Button";
import { styles } from "./styles";

type CardSonhoNavigationProp = StackNavigationProp<RootStackParamList, "SonhosStack">;
interface CardSonhoProps {
   sonho: Sonho;
   atualizaFavoritos?: (sonhoSelecionado: Sonho) => void;
}

export const CardSonho = ({ sonho, atualizaFavoritos }: CardSonhoProps) => {
   const { id, title, descricao, favorite } = sonho;
   const nav = useNavigation<CardSonhoNavigationProp>();

   const handleNavigation = () => {
      nav.navigate("Detalhes", { sonhoSelecionado: sonho });
   };

   const toggleFavorite = () => {
      atualizaFavoritos ? atualizaFavoritos(sonho) : console.error({status: 404, message: "método not found"});
      
   };

   return (
      <TouchableOpacity activeOpacity={0.8} style={styles.card} onLongPress={handleNavigation}>
         <View
            style={{
               marginBottom: -6,
               width: "100%",
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "space-between",
            }}>
            <Text style={styles.cardTitulo}>{title.length > 30 ? title.substring(0, 29).concat("...") : title}</Text>

            <Button image={favorite ? StarOn : StarOff} style={{ borderWidth: 0 }} onPress={toggleFavorite} />
         </View>
         <Text style={[styles.cardText, { minHeight: 60 }]}>
            {descricao.length > 144 ? descricao.substring(0, 143).concat("...") : descricao}
         </Text>
      </TouchableOpacity>
   );
};
