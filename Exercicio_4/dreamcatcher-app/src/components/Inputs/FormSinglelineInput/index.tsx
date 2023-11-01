import { Text, View, TextInput, Image, ImageSourcePropType, StyleProp, ImageStyle } from "react-native";

import { Button } from "../../Button";
import { styles } from "./styles";

interface FormInputProps {
   label: string;
   placeholder: string;
   value: string;
   setValue: React.Dispatch<React.SetStateAction<string>>;
   iconButton?: ImageSourcePropType;
   iconStyle?: StyleProp<ImageStyle>;
   multiline?: boolean;
}

export const FormSinglelineInput = ({
   label,
   placeholder,
   value,
   setValue,

}: FormInputProps) => {
   return (
      <View style={styles.formInputContainer}>
         <Text style={styles.inputLabel}>{label}</Text>
         <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor="#D9D9D980"
         />
      </View>
   );
};
