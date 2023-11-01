import { View, Image, Text, FlatList } from "react-native";

import { Button } from "../../components/Button";

import SleepingCat from "../../assets/sleeping-icon.png";

import { styles } from "./styles";
import { useState } from "react";
import { ModalSonho } from "../../components/Modais/ModalSonhos";
import { CardSonho } from "../../components/CardSonho";
import { sonhosContent } from "../../../mockupContent/SonhoContent";

export interface Sonho {
   id?: string;
   title: string;
   data: string;
   descricao: string;
   tags: TagDataProps[];
}

export interface TagDataProps {
   id: string;
   name: string;
}

export const Home = () => {
   const [modalAberto, setModalAberto] = useState<boolean>(false);
   const [sonhosArray, setSonhosArray] = useState<Sonho[]>([]);

   function criarSonhoCard(sonho: Sonho) {
      const id = "S" + Math.floor(Math.random() * 1000);
      sonhosArray.unshift({ ...sonho, id: id });
   }

   return (
      <View style={styles.container}>
         <View style={{ flex: 0.2, justifyContent: "flex-end" }}>
            <Button
               value="Adicionar Sonho"
               styleAdjustments={{ maxWidth: "50%", maxHeight: "50%" }}
               onPress={() => setModalAberto(true)}
            />
         </View>
         {sonhosArray.length !== 0 ? (
            <FlatList
               data={sonhosArray}
               showsVerticalScrollIndicator={false}
               style={{ width: "85%", flex:1 }}
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
   );
};
