import { useState } from "react";
import { Modal, ModalProps, ScrollView, View, Text, TouchableOpacity } from "react-native";

import { Sonho, TagProps } from "../../../screens/Home";
import { Button } from "../../Button";
import { FormInputIcon } from "../../Inputs/FormInputIcon";
import { FormMultilineInput } from "../../Inputs/FormMultilineInput";
import { FormSinglelineInput } from "../../Inputs/FormSinglelineInput";

import { styles } from "./styles";
import PencilIcon from "../../../assets/PencilIcon.png";
import PupilCatIcon from "../../../assets/pupil-cat.png";

interface modalProps extends ModalProps {
   modal: boolean;
   setModal: React.Dispatch<React.SetStateAction<boolean>>;
   salvar: (sonho: Sonho) => void;
}

export const ModalSonho = ({ modal, setModal, salvar, ...props }: modalProps) => {
   const [title, setTile] = useState<string>("");
   const [data, setData] = useState<string | null>(new Date().toLocaleDateString());
   const [dataEditable, setDataEditable] = useState<boolean>(false);
   const [descricao, setDescricao] = useState<string>("");
   const [tags, setTags] = useState<TagProps[]>([]);
   const [newTag, setNewTag] = useState<string>("");

   const handlePress = () => {
      salvar({ title, data, descricao, tags });
      setModal(!modal);
   };

   const handleTags = () => {
      if (newTag != "" && tags.length < 4) {
         const id = "T" + Math.floor(Math.random() * 1000);
         const novaTag = { id: id, name: newTag };

         setTags([...tags, novaTag]);
      };

      setNewTag("");
   };

   const removeTag = (id: string) => {
      const novoArray = tags.filter(tag => tag.id !== id);

      setTags(novoArray);
   };

   return (
      <Modal
         animationType="slide"
         transparent={true}
         visible={modal}
         onRequestClose={() => {
            setModal(!modal);
         }}
         {...props}>
         <View style={styles.modalContainer}>
            <View style={styles.modalView}>
               <ScrollView contentContainerStyle={styles.contentContainer}>
                  <FormSinglelineInput
                     label="Adicione um sonho"
                     placeholder="Digite um título"
                     value={title}
                     setValue={setTile}
                  />
                  <FormInputIcon
                     label="Data:"
                     value={data}
                     keyboardType="numeric"
                     onChangeText={setData}
                     iconButton={PencilIcon}
                     iconStyle={{ height: 24, width: 24, tintColor: "white", margin: 4 }}
                     editable={dataEditable}
                     onIconPress={() => setDataEditable(!dataEditable)}
                  />
                  <FormMultilineInput
                     label="Descrição:"
                     placeholder="Descreva seu sonho"
                     value={descricao}
                     setValue={setDescricao}
                  />
                  <View style={{ width: "100%", gap: 8}}>
                     <FormInputIcon
                        label="Tag:"
                        placeholder="Digite uma Tag"
                        value={newTag}
                        onChangeText={setNewTag}
                        editable
                        iconButton={PupilCatIcon}
                        iconStyle={{ height: 36, width: 36 }}
                        onIconPress={handleTags}
                     />

                     <View style={{ width: "100%", flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 18 }}>
                        {tags.length > 0 &&
                           tags.map(tag => {
                              return (
                                 <TouchableOpacity
                                    key={tag.id}
                                    activeOpacity={0.8}
                                    onPress={() => removeTag(tag.id)}
                                    style={{
                                       alignItems: "center",
                                       paddingHorizontal: "5%",
                                       paddingVertical: 3,
                                       backgroundColor: "#5C5FB2",
                                       borderRadius: 30,
                                    }}>
                                    <Text style={{ color: "white", fontSize: 12 }}>{tag.name}</Text>
                                 </TouchableOpacity>
                              );
                           })}
                     </View>
                  </View>

                  <View
                     style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 16,
                        marginTop: 28,
                     }}>
                     <Button value="Cancelar" buttonStyle="secondary" onPress={() => setModal(!modal)} />
                     <Button value="Salvar" onPress={handlePress} />
                  </View>
               </ScrollView>
            </View>
         </View>
      </Modal>
   );
};
