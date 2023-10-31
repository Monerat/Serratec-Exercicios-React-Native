import { useEffect, useState } from "react";
import { Modal, ModalProps, ScrollView, View, Text, TouchableOpacity } from "react-native";

import { Sonho, TagDataProps } from "../../../screens/Home";
import { Button } from "../../Button";
import { FormInputIcon } from "../../Inputs/FormInputIcon";
import { FormMultilineInput } from "../../Inputs/FormMultilineInput";
import { FormSinglelineInput } from "../../Inputs/FormSinglelineInput";

import { styles } from "./styles";
import PencilIcon from "../../../assets/PencilIcon.png";
import PupilCatIcon from "../../../assets/pupil-cat.png";
import { Badge } from "../../Badges/Badge";

interface modalProps extends ModalProps {
   modal: boolean;
   setModal: React.Dispatch<React.SetStateAction<boolean>>;
   salvar: (sonho: Sonho) => void;
   sonhoEdit?: Sonho;
   acao: "criar" | "editar";
}

export const ModalSonho = ({ modal, setModal, salvar, acao, sonhoEdit, ...props }: modalProps) => {
   const [id, setId] = useState<string>("")
   const [title, setTitle] = useState<string>("");
   const [data, setData] = useState<string>(new Date().toLocaleDateString());
   const [dataEditable, setDataEditable] = useState<boolean>(false);
   const [descricao, setDescricao] = useState<string>("");
   const [tags, setTags] = useState<TagDataProps[]>([]);
   const [newTag, setNewTag] = useState<string>("");
   const badgeTouchable = true;

   useEffect(()=>{
      acao ==="editar" && settSonhoEdit()
   },[])

   const handlePress = () => {
      salvar({ title, data, descricao, tags })
      setModal(!modal);
   };

   const handleTags = () => {
      if (newTag != "" && tags.length < 3) {
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

   const settSonhoEdit = () =>{
      setId(sonhoEdit.id);
      setTitle(sonhoEdit.title);
      setData(sonhoEdit.data);
      setDescricao(sonhoEdit.descricao);
      setTags(sonhoEdit.tags);
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
                     setValue={setTitle}
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
                                 <Badge<{touchable: typeof badgeTouchable}> key={tag.id} tag={tag} touchable={badgeTouchable} onPress={()=>removeTag(tag.id)} />
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
