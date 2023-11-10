import { Text, TouchableOpacity, View } from "react-native";

import { Sonho } from "../../components/HomeComponent";

import StarOff from "../../assets/favorite-false.png";
import StarOn from "../../assets/favorite-true.png";
import { Button } from "../Button";
import { styles } from "./styles";

interface CardSonhoProps {
   sonho: Sonho;
}

export const CardSonho = ({ sonho }: CardSonhoProps) => {
   const { id, title, descricao, favorite } = sonho;

   const toggleFavorite = () => {
      console.log("Favorite clicado", sonho.favorite);
   };

   return (
      <TouchableOpacity activeOpacity={0.8} style={styles.card}>
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
