import { ScrollView, View, Image, Text } from "react-native";

import { Button } from "../../components/Button";
import { FormInputIcon } from "../../components/FormInputIcon";
import { FormMultilineInput } from "../../components/FormMultilineInput";
import { FormSinglelineInput } from "../../components/FormSinglelineInput";

import PencilIcon from "../../assets/PencilIcon.png";
import PupilCatIcon from "../../assets/pupil-cat.png";
import SleepingCat from "../../assets/sleeping-icon.png";

import { styles } from "./styles";
import { useState } from "react";

export const Home = () =>{
    const [title, setTile] = useState<string | null>(null);

    return(
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
                  onChangeText={setTile}
                  iconButton={PencilIcon}
                  iconStyle={{ height: 24, width: 24, tintColor: "white", margin:4 }}
                  editable={false}
                  onIconPress={()=>console.log(title, "DATA")}
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
                  onChangeText={setTile}
                  iconButton={PupilCatIcon}
                  iconStyle={{ height: 36, width: 36 }}
                  onIconPress={()=>console.log(title, "TAG")}
               />

               <View style={{alignItems: "flex-end", marginTop: 28, width: "100%" }}>
                  <Button>
                     <Text style={styles.buttonText}>Salvar</Text>
                  </Button>
               </View>
            </View>
         </ScrollView>
    );
};