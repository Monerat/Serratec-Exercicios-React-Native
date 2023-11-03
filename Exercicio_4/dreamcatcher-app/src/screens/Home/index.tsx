import { useState } from "react";
import { View, Image, Text, FlatList, ImageBackground } from "react-native";

import SleepingCat from "../../assets/sleeping-icon.png";
import BgImage from "../../assets/bg-padrao.png";
import { sonhosContent } from "../../../mockupContent/SonhoContent";

import { Button } from "../../components/Button";
import { ModalSonho } from "../../components/Modais/ModalSonhos";
import { CardSonho } from "../../components/CardSonho";

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

export const Home = () => {
   const [modalAberto, setModalAberto] = useState<boolean>(false);
   const [sonhosArray, setSonhosArray] = useState<Sonho[]>(sonhosContent);

   function criarSonhoCard(sonho: Sonho) {
      const id = "S" + Math.floor(Math.random() * 1000);
      sonhosArray.unshift({ ...sonho, id: id, favorite: false });
   };

   return (
      <ImageBackground
         source={BgImage}
         style={{ flex: 1, position: "relative" }}
         imageStyle={{ position: "absolute", left: 0 }}>
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
      </ImageBackground>
   );
};
