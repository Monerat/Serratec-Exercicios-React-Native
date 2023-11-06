import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

import SleepingCat from "../../assets/sleeping-icon.png";


import { Button } from "../../components/Button";
import { CardSonho } from "../../components/CardSonho";
import { ModalSonho } from "../../components/Modais/ModalSonhos";

import { styles } from "./styles";

export interface Sonho {
   id?: string;
   title: string;
   data: string;
   descricao: string;
   favorite: boolean;
   tags?: TagDataProps[];
}

export interface TagDataProps {
   id: string;
   name: string;
}

export const HomeComponent = () => {
   const [modalAberto, setModalAberto] = useState<boolean>(false);
   const [sonhosArray, setSonhosArray] = useState<Sonho[]>([]);

   function criarSonhoCard(sonho: Sonho) {
      sonhosArray.unshift(sonho);
   };

   return (
         <View style={styles.container}>
            
            <View style={{ flex: 0.2, justifyContent: "flex-end"}}>
               <Button
                  text="Adicionar Sonho"
                  styleAdjustments={{ maxWidth: "50%", maxHeight: "50%", minHeight: 50 }}
                  onPress={() => setModalAberto(true)}
               />
            </View>
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
            {modalAberto && (
               <ModalSonho modal={modalAberto} setModal={setModalAberto} salvar={criarSonhoCard} acao="criar" />
            )}
         </View>
   );
};
