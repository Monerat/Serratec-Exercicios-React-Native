import {  View, Image, Text } from "react-native";

import { Button } from "../../components/Button";

import SleepingCat from "../../assets/sleeping-icon.png";

import { styles } from "./styles";
import { useState } from "react";
import { ModalSonho } from "../../components/Modais/ModalSonhos";


export interface Sonho{
   title: string;
   data: string;
   descricao: string;
   tag: string;
};

export const Home = () => {
   const [modalAberto, setModalAberto] = useState<boolean>(false);
   const [sonhos, setSonho] = useState<Sonho[]>([])

   return (
      <View style={styles.container}>
         <View style={{flex: 0.5, justifyContent: "center"}}>
            <Button onPress={()=>setModalAberto(true)}>
               <Text style={styles.buttonText}>Adicionar Sonho</Text>
            </Button>
         </View>

         <View style={[styles.sonhoContainer, {backgroundColor: "red"}]}>
            <Image source={SleepingCat} style={{ tintColor: "white" }} />
            <Text style={styles.textBase}>Ops, parece que não tem nenhum sonho aqui</Text>
         </View>

         {modalAberto && <ModalSonho modal={modalAberto} setModal={setModalAberto} setSonho={setSonho}/>}
      </View>
   );
};
