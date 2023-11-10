import { Image, Text, View } from "react-native";
import SleepingCat from "../../assets/sleeping-icon.png";

import { styles } from "./styles";

export const EmptyMessage = () => {
    return(
        <View style={styles.sonhoVazioContainer}>
            <Image source={SleepingCat} style={{ tintColor: "white" }} />
            <Text style={styles.textBase}>Ops, parece que não tem nenhum sonho aqui</Text>
        </View>
    );
};