import { useEffect, useState } from "react";
import { View, Image, Text, FlatList, ActivityIndicator } from "react-native";
import { SvgXml } from "react-native-svg";

import SleepingCat from "../../assets/sleeping-icon.png";


import { Button } from "../../components/Button";
import { ModalSonho } from "../../components/Modais/ModalSonhos";
import { CardSonho } from "../../components/CardSonho";

import { styles } from "./styles";
import { ApiConfig, Phase, getMoonPhase } from "../../services/api";

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
export interface headerDataProps {
   diaSemana: string;
   diaMes: number;
   mês: string;
   ano: number;
   moonPhase: Phase;
}

export const HomeComponent = () => {
   const [modalAberto, setModalAberto] = useState<boolean>(false);
   const [sonhosArray, setSonhosArray] = useState<Sonho[]>([]);
   const [moonPhaseHeaderData, setMoonPhaseHeaderData] = useState<headerDataProps>();
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      getMoonPhaseDiaAtual();
   });

   function criarSonhoCard(sonho: Sonho) {
      const id = "S" + Math.floor(Math.random() * 1000);
      sonhosArray.unshift({ ...sonho, id: id });
   }

   function getMoonPhaseDiaAtual() {
      const dataAtual = new Date();

      const params: ApiConfig = {
         lang: "pt",
         year: dataAtual.getFullYear(),
         month: dataAtual.getMonth(),
         size: 100,
         texturize: false,
         lightColor: "#fff",
         shadeColor: "#1C1C3B",
      };

      getMoonPhase(params)
         .then(res => {
            const dataAtual = new Date();
            const reqData = res.data.receivedVariables;
            const diaSemana = dataAtual.getDay();
            const diaMes = dataAtual.getDate();

            const headerData = {
               diaSemana: res.data.nameDay[diaSemana - 1],
               diaMes: diaMes,
               mês: res.data.nameMonth[reqData.month],
               ano: res.data.year,
               moonPhase: res.data.phase[diaMes],
            };

            setMoonPhaseHeaderData(headerData);
         })
         .catch(err => {
            console.log(err);
         })
         .finally(() => {
            setLoading(false);
         });
   }

   return (
      <View style={styles.container}>
         <View
            style={{
               flex: 0.2,
               flexDirection: "row",
               alignItems: "center",
               justifyContent: loading ? "center" : "space-between",
               paddingHorizontal: 36,
            }}>
            {loading ? (
               <ActivityIndicator color="#DD8EEA" size="large" />
            ) : (
               <>
                  <View style={{flex: 1, flexDirection: "column", alignItems: "flex-start" }}>
                     <Text style={styles.headerText}>
                        {moonPhaseHeaderData.mês}, {moonPhaseHeaderData.ano}
                     </Text>
                     <Text style={styles.headerText}>
                        dia {moonPhaseHeaderData.diaMes}, {moonPhaseHeaderData.diaSemana}
                     </Text>
                     <Text style={styles.headerText}>
                        Lua {moonPhaseHeaderData.moonPhase.phaseName}
                     </Text>
                  </View>
                  <View style={{ flex: 0.8, alignItems: "flex-end", marginRight: -18 }}>
                     <SvgXml xml={moonPhaseHeaderData.moonPhase.svg} width={"100%"} height={"100%"} />
                  </View>
               </>
            )}
         </View>

         <View style={{ flex: 0.2, justifyContent: "center" }}>
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
               style={{ width: "85%", flex: 1 }}
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
