import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import BgImage from "./src/assets/bg-padrao.png";
import StarOff from "./src/assets/favorite-false.png";

export default function App() {
   return (
      <ImageBackground source={BgImage} style={styles.bgImage} imageStyle={{ position: "absolute", left: 0 }}>
         <StatusBar style="light" />
         <View style={styles.container}>

            <View style={styles.formContainer}>
               <View style={styles.formInputContainer}>
                  <Text style={styles.inputLabel}>Adicione um sonho:</Text>
                  <TextInput
                     style={styles.textInput}
                     placeholder={"Digite um título para o seu sonho"}
                     placeholderTextColor="#D9D9D980"
                  />
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
               <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                  <Text style={styles.buttonText}>Adicionar Sonho</Text>
               </TouchableOpacity>
            </View>

            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} >
               <View style={styles.card}>
                  <View
                     style={{
                        marginBottom: -6,
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                     }}>
                     <Text style={styles.cardTitulo}>Sonho</Text>

                     <TouchableOpacity style={[styles.buttonIcon, { borderWidth: 0 }]}>
                        <Image source={StarOff} width={16} height={16} resizeMode="contain" />
                     </TouchableOpacity>
                  </View>
                  <Text style={[styles.cardText, { minHeight: 60 }]}>
                     loren ipesum loren loren loren loren loren loren ipsum ipsum mesmo
                  </Text>
               </View>
               <View style={styles.card}>
                  <View
                     style={{
                        marginBottom: -6,
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                     }}>
                     <Text style={styles.cardTitulo}>Outro Sonho</Text>

                     <TouchableOpacity style={[styles.buttonIcon, { borderWidth: 0 }]}>
                        <Image source={StarOff} width={16} height={16} resizeMode="contain" />
                     </TouchableOpacity>
                  </View>
                  <Text style={[styles.cardText, { minHeight: 60 }]}>
                     loren ipesum loren loren loren loren loren loren ipsum ipsum mesmo
                  </Text>
               </View>
               <View style={styles.card}>
                  <View
                     style={{
                        marginBottom: -6,
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                     }}>
                     <Text style={styles.cardTitulo}>Outro outro Sonho</Text>

                     <TouchableOpacity style={[styles.buttonIcon, { borderWidth: 0 }]}>
                        <Image source={StarOff} width={16} height={16} resizeMode="contain" />
                     </TouchableOpacity>
                  </View>
                  <Text style={[styles.cardText, { minHeight: 60 }]}>
                     loren ipesum loren loren loren loren loren loren ipsum ipsum mesmo
                  </Text>
               </View>
            </ScrollView>
         </View>
      </ImageBackground>
   );
}
