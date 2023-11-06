import { View, Text, TouchableOpacity } from "react-native";

import { Sonho } from "../../components/HomeComponent";

import { styles } from "./styles";
import { Badge } from "../Badges/Badge";
import { Button } from "../Button";
import StarOn from "../../assets/favorite-true.png";
import StarOff from "../../assets/favorite-false.png";

interface CardSonhoProps {
   sonho: Sonho;
}

export const CardSonho = ({ sonho }: CardSonhoProps) => {
   const { id, title, data, descricao, favorite, tags } = sonho;
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
         <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.cardText}>{data}</Text>
         </View>
         <Text style={[styles.cardText, { minHeight: 60 }]}>
            {descricao.length > 144 ? descricao.substring(0, 143).concat("...") : descricao}
         </Text>
         <View style={styles.tagsContainer}>
            {tags.length > 0 &&
               tags.map(tag => {
                  return <Badge key={tag.id} tag={tag} />;
               })}
         </View>
      </TouchableOpacity>
   );
};
