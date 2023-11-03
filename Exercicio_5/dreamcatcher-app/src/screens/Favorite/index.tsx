import { View, Image, Text, FlatList, ImageBackground } from "react-native";

import { Button } from "../../components/Button";

import SleepingCat from "../../assets/sleeping-icon.png";
import BgImage from "../../assets/bg-padrao.png";

import { styles } from "./styles";
import { useState } from "react";
import { ModalSonho } from "../../components/Modais/ModalSonhos";
import { CardSonho } from "../../components/CardSonho";
import { Sonho } from "../Home";

export const Favorite = () => {
   const [modalAberto, setModalAberto] = useState<boolean>(false);
   const [sonhosArray, setSonhosArray] = useState<Sonho[]>([]);

   function criarSonhoCard(sonho: Sonho) {
      const id = "S" + Math.floor(Math.random() * 1000);
      sonhosArray.unshift({ ...sonho, id: id });
   }

   return (
      <ImageBackground
         source={BgImage}
         style={{ flex: 1, position: "relative" }}
         imageStyle={{ position: "absolute", left: 0 }}>
      <View style={styles.container}>
         {sonhosArray.length !== 0 ? (
            <FlatList
               data={sonhosArray}
               showsVerticalScrollIndicator={false}
               style={{ width: "85%", flex: 1  }}
               keyExtractor={data => data.id!}
               renderItem={({ item, index }) => <CardSonho sonho={item} />}
            />
         ) : (
            <View style={styles.sonhoContainer}>
               <Image source={SleepingCat} style={{ tintColor: "white" }} />
               <Text style={styles.textBase}>Ops, parece que não tem nenhum sonho aqui</Text>
            </View>
         )}
         {modalAberto && <ModalSonho modal={modalAberto} setModal={setModalAberto} salvar={criarSonhoCard} acao="criar" />}
      </View>
      </ImageBackground>
   );
};
