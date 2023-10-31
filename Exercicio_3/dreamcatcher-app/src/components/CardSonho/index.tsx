import { View, Text } from "react-native";
import { Sonho } from "../../screens/Home";

interface CardSonhoProps{
    sonho: Sonho
}

export const CardSonho = ({ sonho }: CardSonhoProps) => {
    const { id, title, data, descricao, tags } = sonho;

   return (
      <View style={{marginVertical: 15}}>
         <Text style={{color: "white"}}>{title}</Text>
         <Text style={{color: "white"}}>{data}</Text>
         <Text style={{color: "white"}}>{descricao}</Text>
         <Text style={{color: "white"}}>{tags[0].name}</Text>
      </View>
   );
};
