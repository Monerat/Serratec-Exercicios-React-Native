import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import StarOn from "../../assets/favorite-true.png";
import StarOff from "../../assets/favorite-false.png";
import { Sonho } from "../HomeComponent";
import { Badge } from "../Badges/Badge";
import { RootStackParamList } from "../../routes/StackNavigation";

import { styles } from "./styles";
import { Button } from "../Button";

type CardSonhoNavigationProp = StackNavigationProp<RootStackParamList, "SonhosStack">;
interface CardSonhoProps {
   sonho: Sonho;
}

export const CardSonho = ({ sonho }: CardSonhoProps) => {
   const { id, title, data, descricao, favorite, tags } = sonho;
   const nav = useNavigation<CardSonhoNavigationProp>();

   const handleNavigation = () => {
      nav.navigate("Detalhes", { sonhoSelecionado: sonho });
   };

   const toggleFavorite = () => {
      console.log("Favorite clicado", sonho.favorite);
   };

   return (
      <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={handleNavigation}>
         <View style={{marginBottom: -6, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Text style={styles.cardTitulo}>{title.length > 30 ? title.substring(0, 29).concat("...") : title}</Text>

            <Button image={favorite ? StarOn : StarOff} style={{borderWidth: 0}} onPress={toggleFavorite} />
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
