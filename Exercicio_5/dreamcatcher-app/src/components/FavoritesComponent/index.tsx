import { useState } from "react";
import { View, Image, Text, FlatList } from "react-native";

import SleepingCat from "../../assets/sleeping-icon.png";

import { styles } from "./styles";
import { CardSonho } from "../CardSonho";
import { Sonho } from "../HomeComponent";

export const FavoritesComponent = () => {
   const [sonhosArray, setSonhosArray] = useState<Sonho[]>([]);

   return (
      <View style={styles.container}>
         {sonhosArray.length !== 0 ? (
            <FlatList
               data={sonhosArray}
               showsVerticalScrollIndicator={false}
               style={{ width: "85%", flex: 1 }}
               keyExtractor={data => data.id!}
               renderItem={({ item, index }) => <CardSonho sonho={item} />}
            />
         ) : (
            <View style={styles.sonhoContainer}>
               <Image source={SleepingCat} style={{ tintColor: "white" }} />
               <Text style={styles.textBase}>Ops, parece que não tem nenhum sonho aqui</Text>
            </View>
         )}
      </View>
   );
};
