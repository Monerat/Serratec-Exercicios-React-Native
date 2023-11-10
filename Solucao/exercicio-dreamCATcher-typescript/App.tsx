import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from "./styles";
import starCard from './src/assets/images/start-favorite-svgrepo-com.png';

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSalvarSonho = () => {

  }
  return (

    <LinearGradient
      colors={['#051937', '#172658', '#373179', '#5e3896', '#8c39af']}
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1.2 }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Adicione um sonho</Text>
          <TextInput
            style={styles.titulo}
            placeholder='Digite um titulo' placeholderTextColor="#9f9d9daa"
            onChangeText={(value) => { setTitulo(value) }}
            value={titulo}>
          </TextInput>

          <Text style={styles.label}>Descrição: </Text>
          <TextInput
            style={styles.descricao}
            placeholder='Descreva seu sonho'
            placeholderTextColor="#9f9d9daa"
            onChangeText={(value) => { setDescricao(value) }}
            value={descricao}>
          </TextInput>
          <TouchableOpacity style={styles.botao} onPress={handleSalvarSonho} activeOpacity={0.8}>
            <Text style={styles.buttonLabel}>ADICIONAR SONHO</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={[{
              id: 1,
              titulo: "Lorem teste",
              descricao: "Lorem descricao teste 1"
            },
            {
              id: 2,
              titulo: "Lorem teste",
              descricao: "Lorem descricao teste 2"
            },
            {
              id: 3,
              titulo: "Lorem teste",
              descricao: "Lorem descricao teste 3 "
            }]}

            renderItem={({ item }) => {
              return (
                <View style={styles.cardSonho}>
                  <View style={styles.cardSonhoTop}>
                    <Text style={styles.cardTitulo}>{item.titulo}</Text>
                    <Image source={starCard} style={styles.starCard} />
                  </View>
                  <Text style={styles.cardDescricao}>{item.descricao}</Text>
                </View>
              )
            }
            }
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </LinearGradient>

  );
};