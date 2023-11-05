import { useContext, useEffect, useState } from "react";
import { View, Image, Text, FlatList } from "react-native";

import SleepingCat from "../../assets/sleeping-icon.png";

import { styles } from "./styles";
import { CardSonho } from "../CardSonho";
import { Sonho } from "../HomeComponent";
import { FavoritesContext } from "../../contexts/FavoritesContext";

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
            <View style={styles.sonhoContainer}>
               <Image source={SleepingCat} style={{ tintColor: "white" }} />
               <Text style={styles.textBase}>Ops, parece que não tem nenhum sonho aqui</Text>
            </View>
         )}
      </View>
   );
};
