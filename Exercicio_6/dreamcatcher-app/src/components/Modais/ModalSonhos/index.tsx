import { useContext, useEffect, useState } from "react";
import { Modal, ModalProps, ScrollView, View } from "react-native";

import { Sonho, TagDataProps } from "../../../components/HomeComponent";
import { Button } from "../../Button";
import { FormInput } from "../../Inputs/FormInput";

import PencilIcon from "../../../assets/PencilIcon.png";
import PupilCatIcon from "../../../assets/pupil-cat.png";
import { FavoritesContext } from "../../../contexts/FavoritesContext";
import { Badge } from "../../Badges/Badge";
import { styles } from "./styles";

interface modalProps extends ModalProps {
   modal: boolean;
   setModal: React.Dispatch<React.SetStateAction<boolean>>;
   salvar?: (sonho: Sonho) => void;
   sonhoEdit?: Sonho;
   setSonhoEdit?: React.Dispatch<React.SetStateAction<Sonho>>
   acao: "criar" | "editar";
}

export const ModalSonho = ({ modal, setModal, salvar, acao, sonhoEdit, setSonhoEdit, ...props }: modalProps) => {
   const { addSonho, editSonho } = useContext(FavoritesContext);

   const [id, setId] = useState<string | null>(null);
   const [title, setTitle] = useState<string>("");
   const [data, setData] = useState<string>(new Date().toLocaleDateString());
   const [dataEditable, setDataEditable] = useState<boolean>(false);
   const [descricao, setDescricao] = useState<string>("");
   const [favorite, setFavorite] = useState<boolean>(false);
   const [tags, setTags] = useState<TagDataProps[]>([]);
   const [newTag, setNewTag] = useState<string>("");
   const badgeTouchable = true;

   useEffect(() => {
      acao === "editar" && settSonhoEdit();
   }, []);

   const handlePress = () => {
      const generatedId = "S" + Math.floor(Math.random() * 1000);
      const sonhoSelecionado = { id: id ?? generatedId, title, data, descricao, favorite, tags };  

      acao === "editar" && setSonhoEdit(sonhoSelecionado)

      salvar 
         ? salvar(sonhoSelecionado) 
         : acao === "criar"
            ? addSonho(sonhoSelecionado)
            : editSonho(sonhoSelecionado);

      setModal(!modal);
   };

   const handleTags = () => {
      if (newTag != "" && tags.length < 3) {
         const id = "T" + Math.floor(Math.random() * 1000);
         const novaTag = { id: id, name: newTag };

         setTags([...tags, novaTag]);
      }

      setNewTag("");
   };

   const removeTag = (id: string) => {
      const novoArray = tags.filter(tag => tag.id !== id);

      setTags(novoArray);
   };

   const settSonhoEdit = () => {
      setId(sonhoEdit.id);
      setTitle(sonhoEdit.title);
      setData(sonhoEdit.data);
      setDescricao(sonhoEdit.descricao);
      setFavorite(sonhoEdit.favorite);
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
                  <FormInput
                     label="Adicione um sonho"
                     placeholder="Digite um título"
                     value={title}
                     onChangeText={setTitle}
                  />
                  <FormInput
                     label="Data:"
                     value={data}
                     keyboardType="phone-pad"
                     onChangeText={setData}
                     icon={PencilIcon}
                     iconStyle={{ height: 24, width: 24, tintColor: "white", margin: 4 }}
                     editable={dataEditable}
                     onIconPress={() => setDataEditable(!dataEditable)}
                  />
                  <FormInput
                     label="Descrição:"
                     placeholder="Descreva seu sonho"
                     value={descricao}
                     onChangeText={setDescricao}
                     multiline
                  />
                  <View style={{ width: "100%", gap: 8 }}>
                     <FormInput
                        label="Tag:"
                        placeholder="Digite uma Tag"
                        value={newTag}
                        onChangeText={setNewTag}
                        editable
                        icon={PupilCatIcon}
                        iconStyle={{ height: 36, width: 36 }}
                        onIconPress={handleTags}
                     />

                     <View style={{ width: "100%", flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 18 }}>
                        {tags.length > 0 &&
                           tags.map(tag => {
                              return (
                                 <Badge<{ touchable: typeof badgeTouchable }>
                                    key={tag.id}
                                    tag={tag}
                                    touchable={badgeTouchable}
                                    onPress={() => removeTag(tag.id)}
                                 />
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
                     <Button text="Cancelar" buttonStyle="secondary" onPress={() => setModal(!modal)} />
                     <Button text={acao} onPress={handlePress} />
                  </View>
               </ScrollView>
            </View>
         </View>
      </Modal>
   );
};
