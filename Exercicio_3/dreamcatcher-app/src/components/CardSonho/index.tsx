import { View, Text, TouchableOpacity } from "react-native";

import { Sonho } from "../../screens/Home";

import { styles } from "./styles";
import { Badge } from "../Badges/Badge";

interface CardSonhoProps {
   sonho: Sonho;
}

export const CardSonho = ({ sonho }: CardSonhoProps) => {
   const { id, title, data, descricao, tags } = sonho;

   return (
      <TouchableOpacity activeOpacity={0.8} style={styles.card}>
            <Text style={styles.cardTitulo}>{title.length > 38 ? title.substring(0,37).concat("...") : title}</Text>
            <View style={styles.dividerContainer}>
               <View style={styles.divider} />
               <Text style={styles.cardText}>{data}</Text>
            </View>
            <Text style={[styles.cardText,{minHeight: 60}]}>{descricao.length > 144 ? descricao.substring(0,143).concat("...") : descricao}</Text>
            <View style={styles.tagsContainer}>
               {tags.length > 0 &&
                  tags.map(tag => {
                     return <Badge key={tag.id} tag={tag} />;
                  })}
            </View>
      </TouchableOpacity>
   );
};
