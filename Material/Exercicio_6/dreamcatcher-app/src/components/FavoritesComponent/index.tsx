import { useContext, useEffect, useState } from "react";
import { FlatList, View } from "react-native";


import { FavoritesContext } from "../../contexts/FavoritesContext";
import { CardSonho } from "../CardSonho";
import { EmptyMessage } from "../EmptyMessage/EmptyMessage";
import { Sonho } from "../HomeComponent";
import { styles } from "./styles";

export const FavoritesComponent = () => {
   const {sonhosArray} = useContext(FavoritesContext)
   const [sonhosFavoritosArray, setSonhosFavoritosArray] = useState<Sonho[]>([])

   useEffect(()=>{
      settaDataSonhosFavoritos()
   },[sonhosArray]);

   function settaDataSonhosFavoritos(){
     let sonhosFavoritos = sonhosArray.filter(sonho => sonho.favorite === true)
     setSonhosFavoritosArray(sonhosFavoritos)
   }

   return (
      <View style={styles.container}>
         {sonhosFavoritosArray.length !== 0 ? (
            <FlatList
               data={sonhosFavoritosArray}
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
