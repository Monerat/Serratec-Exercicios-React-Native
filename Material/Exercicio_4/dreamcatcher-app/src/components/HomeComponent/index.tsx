import { useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";

import { Button } from "../../components/Button";
import { CardSonho } from "../../components/CardSonho";

import { EmptyMessage } from "../EmptyMessage/EmptyMessage";
import { FormInput } from "../Inputs/FormInput";
import { styles } from "./styles";

export interface Sonho {
   id?: string;
   title: string;
   descricao: string;
   favorite: boolean;
}

export const HomeComponent = () => {
   const [sonhosArray, setSonhosArray] = useState<Sonho[]>([]);
   const [id, setId] = useState<string | null>(null);
   const [title, setTitle] = useState<string>("");
   const [descricao, setDescricao] = useState<string>("");

   function criarSonhoCard() {
      const generatedId = "S" + Math.floor(Math.random() * 1000);
      const sonhoSelecionado = { id: id ?? generatedId, title, descricao, favorite: false };

      setSonhosArray([sonhoSelecionado, ...sonhosArray]);
      limparStringInputs([setTitle, setDescricao]);
   }

   const atualizaFavoritosArray = (sonhoSelecionado: Sonho) => {
      const updatedSonhosArray = sonhosArray.map(sonho => {
         if (sonho.id === sonhoSelecionado.id) {
            let favoritado = sonho.favorite;

            return { ...sonhoSelecionado, favorite: !favoritado };
         }

         return sonho;
      });

      setSonhosArray(updatedSonhosArray);
   };

   const limparStringInputs = (setStateArray: React.Dispatch<React.SetStateAction<string>>[]) => {
      setStateArray.forEach(setState => {
         setState("");
      });
   };

   return (
      <KeyboardAvoidingView
         behavior="height"
         keyboardVerticalOffset={Platform.OS === "android" && -500}
         style={styles.container}>
         <View style={styles.formContainer}>
            <FormInput label="Adicione um sonho" placeholder="Digite um título" value={title} onChangeText={setTitle} />
            <FormInput
               label="Descrição:"
               placeholder="Descreva seu sonho"
               value={descricao}
               onChangeText={setDescricao}
               multiline
            />
            <Button
               text="Adicionar Sonho"
               styleAdjustments={{ maxWidth: "80%", maxHeight: "50%", minHeight: 50 }}
               onPress={() => criarSonhoCard()}
            />
         </View>
         {sonhosArray.length !== 0 ? (
            <FlatList
               data={sonhosArray}
               showsVerticalScrollIndicator={false}
               style={{ width: "85%", flex: 1 }}
               keyExtractor={data => data.id!}
               renderItem={({ item, index }) => <CardSonho sonho={item} atualizaFavoritos={atualizaFavoritosArray} />}
            />
         ) : (
            <View style={{ flex: 1 }}>
               <EmptyMessage />
            </View>
         )}
      </KeyboardAvoidingView>
   );
};
