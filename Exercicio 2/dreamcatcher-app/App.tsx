import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, ImageBackground, Image, ScrollView } from "react-native";

import BgImage from "./src/assets/bg-padrao.png";
import PencilIcon from "./src/assets/PencilIcon.png";
import PupilCatIcon from "./src/assets/pupil-cat.png";
import SleepingCat from "./src/assets/sleeping-icon.png";

import { styles } from "./styles";
import { Button } from "./src/components/Button";
import { FormSinglelineInput } from "./src/components/FormSinglelineInput";
import { FormMultilineInput } from "./src/components/FormMultilineInput";
import { FormInputIcon } from "./src/components/FormInputIcon";

export default function App() {
   const [title, setTile] = useState<string | null>(null);

   return (
      <ImageBackground source={BgImage} style={styles.bgImage} imageStyle={{ position: "absolute", left: 0 }}>
         <StatusBar style="light" />
         <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer}>
            <View style={styles.sonhoContainer}>
               <Image source={SleepingCat} style={{ tintColor: "white" }} />
               <Text style={styles.textBase}>Ops, parece que não tem nenhum sonho aqui</Text>
            </View>

            <View style={styles.formContainer}>
               <FormSinglelineInput
                  label="Adicione um sonho"
                  placeholder="Digite um título"
                  value={title}
                  setValue={setTile}
               />
               <FormInputIcon
                  label="Data:"
                  value={title ?? new Date().toLocaleDateString()}
                  setValue={setTile}
                  iconButton={PencilIcon}
                  iconStyle={{ height: 24, width: 24, tintColor: "white", margin:4 }}
               />
               <FormMultilineInput
                  label="Descrição:"
                  placeholder="Descreva seu sonho"
                  value={title}
                  setValue={setTile}
               />
               <FormInputIcon
                  label="Tag:"
                  placeholder="Digite uma Tag"
                  value={title}
                  setValue={setTile}
                  iconButton={PupilCatIcon}
                  iconStyle={{ height: 36, width: 36 }}
               />

               <View style={{alignItems: "flex-end", marginTop: 28, width: "100%" }}>
                  <Button>
                     <Text style={styles.buttonText}>Salvar</Text>
                  </Button>
               </View>
            </View>
         </ScrollView>
      </ImageBackground>
   );
}
