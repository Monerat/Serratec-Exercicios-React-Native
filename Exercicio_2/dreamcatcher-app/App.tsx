import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import PencilIcon from "./src/assets/PencilIcon.png";
import BgImage from "./src/assets/bg-padrao.png";
import PupilCatIcon from "./src/assets/pupil-cat.png";
import SleepingCat from "./src/assets/sleeping-icon.png";

export default function App() {
   return (
      <ImageBackground 
      source={BgImage} 
      style={styles.bgImage} 
      imageStyle={{ position: "absolute", left: 0 }}
      >
         <StatusBar style="light" />
         <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer}>
            <View style={styles.sonhoContainer}>
               <Image source={SleepingCat} style={{ tintColor: "white" }} />
               <Text style={styles.textBase}>Ops, parece que não tem nenhum sonho aqui</Text>
            </View>

            <View style={styles.formContainer}>
               <View style={styles.formInputContainer}>
                  <Text style={styles.inputLabel}>Adicione um sonho:</Text>
                  <TextInput
                     style={styles.textInput}
                     placeholder={"Digite um título para o seu sonho"}
                     placeholderTextColor="#D9D9D980"
                  />
               </View>
               <View style={styles.formInputHorizontal}>
                  <Text style={styles.inputLabel}>Data:</Text>
                  <TextInput
                     style={styles.textInput}
                     placeholder={new Date().toLocaleDateString()}
                     placeholderTextColor="#D9D9D980"
                  />
                  <TouchableOpacity activeOpacity={0.7} style={styles.buttonIcon}>
                     <Image
                        source={PencilIcon}
                        resizeMode="contain"
                        style={{ height: 32, width: 32, tintColor: "white"}}
                     />
                  </TouchableOpacity>
               </View>
               <View style={styles.formInputContainer}>
                  <Text style={styles.inputLabel}>Descrição:</Text>
                  <TextInput
                     multiline
                     style={styles.textMultilineInput}
                     placeholder={"Descreva seu sonho"}
                     placeholderTextColor="#D9D9D980"
                  />
               </View>
               <View style={styles.formInputHorizontal}>
                  <Text style={styles.inputLabel}>Tag:</Text>
                  <TextInput style={styles.textInput} placeholder={"Digite uma tag"} placeholderTextColor="#D9D9D980" />
                  <TouchableOpacity activeOpacity={0.7} style={styles.buttonIcon}>
                     <Image source={PupilCatIcon} style={{ height: 36, width: 36 }} />
                  </TouchableOpacity>
               </View>
               <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                  <Text style={styles.buttonText}>Salvar</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </ImageBackground>
   );
}
