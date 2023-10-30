import { useState } from "react";
import { Modal, ModalProps, ScrollView, View, Text } from "react-native";

import { Button } from "../../Button";
import { FormInputIcon } from "../../Inputs/FormInputIcon";
import { FormMultilineInput } from "../../Inputs/FormMultilineInput";
import { FormSinglelineInput } from "../../Inputs/FormSinglelineInput";

import { styles } from "./styles";
import PencilIcon from "../../../assets/PencilIcon.png";
import PupilCatIcon from "../../../assets/pupil-cat.png";
import { Sonho } from "../../../screens/Home";

interface modalProps extends ModalProps {
   modal: boolean;
   setModal: React.Dispatch<React.SetStateAction<boolean>>;
   setSonho: React.Dispatch<React.SetStateAction<Sonho[]>>;
}

export const ModalSonho = ({ modal, setModal, ...props }: modalProps) => {

    const [title, setTile] = useState<string>("");
    const [data, setData] = useState<string | null>(null);
    const [descricao, setDescricao] = useState<string>("");
    const [tag, setTag] = useState<string>("");

   return (
      <Modal
         animationType="slide"
         transparent={true}
         visible={modal}
         onRequestClose={() => {
            setModal(!modal);
         }}
         {...props}>
         <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer}>
            <View style={styles.formContainer}>
               <FormSinglelineInput
                  label="Adicione um sonho"
                  placeholder="Digite um título"
                  value={title}
                  setValue={setTile}
               />
               <FormInputIcon
                  label="Data:"
                  value={data ?? new Date().toLocaleDateString()}
                  onChangeText={setData}
                  iconButton={PencilIcon}
                  iconStyle={{ height: 24, width: 24, tintColor: "white", margin: 4 }}
                  editable={false}
                  onIconPress={() => console.log(title, "DATA")}
               />
               <FormMultilineInput
                  label="Descrição:"
                  placeholder="Descreva seu sonho"
                  value={descricao}
                  setValue={setDescricao}
               />
               <FormInputIcon
                  label="Tag:"
                  placeholder="Digite uma Tag"
                  value={tag}
                  onChangeText={setTag}
                  iconButton={PupilCatIcon}
                  iconStyle={{ height: 36, width: 36 }}
                  onIconPress={() => console.log(title, "TAG")}
               />

               <View style={{ alignItems: "flex-end", marginTop: 28, width: "100%" }}>
                  <Button>
                     <Text style={styles.buttonText}>Salvar</Text>
                  </Button>
               </View>
            </View>
         </ScrollView>
      </Modal>
   );
};
