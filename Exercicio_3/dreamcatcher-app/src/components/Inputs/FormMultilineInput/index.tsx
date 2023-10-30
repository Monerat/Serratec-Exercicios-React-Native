import { Text, View, TextInput } from "react-native";

import { styles } from "./styles";

interface FormInputProps {
   label: string;
   placeholder: string;
   value: string;
   setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const FormMultilineInput = ({
   label,
   placeholder,
   value,
   setValue,
}: FormInputProps) => {
   return (
      <View style={styles.formInputContainer}>
         <Text style={styles.inputLabel}>{label}</Text>
         <TextInput
            multiline
            value={value}
            onChangeText={setValue}
            style={styles.textMultilineInput}
            placeholder={placeholder}
            placeholderTextColor="#D9D9D980"
         />
      </View>
   );
};
