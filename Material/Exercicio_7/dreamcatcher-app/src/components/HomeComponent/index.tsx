import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";



import { Button } from "../../components/Button";
import { CardSonho } from "../../components/CardSonho";
import { ModalSonho } from "../../components/Modais/ModalSonhos";

import { FavoritesContext } from "../../contexts/FavoritesContext";
import { ApiConfig, Phase, getMoonPhase } from "../../services/api";
import { EmptyMessage } from "../EmptyMessage/EmptyMessage";
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
export interface headerDataProps {
   diaSemana: string;
   diaMes: number;
   mês: string;
   ano: number;
   moonPhase: Phase;
}

export const HomeComponent = () => {
   const [modalAberto, setModalAberto] = useState<boolean>(false);
   const [moonPhaseHeaderData, setMoonPhaseHeaderData] = useState<headerDataProps>();
   const [loading, setLoading] = useState<boolean>(true);

   const { sonhosArray } = useContext(FavoritesContext);

   useEffect(() => {
      getMoonPhaseDiaAtual();
   },[]);


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
               diaSemana: res.data.nameDay[diaSemana === 0 ? 6 : diaSemana - 1],
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
            <View style={{flex:1}}>
               <EmptyMessage />
            </View>
         )}
         {modalAberto && (
            <ModalSonho modal={modalAberto} setModal={setModalAberto} acao="criar" />
         )}
      </View>
   );
};
