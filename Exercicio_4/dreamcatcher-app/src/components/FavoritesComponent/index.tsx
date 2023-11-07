import { useState } from "react";
import { FlatList, View } from "react-native";


import { CardSonho } from "../CardSonho";
import { EmptyMessage } from "../EmptyMessage/EmptyMessage";
import { Sonho } from "../HomeComponent";
import { styles } from "./styles";

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
            <View style={{flex:1}}>
               <EmptyMessage />
            </View>
         )}
      </View>
   );
};
