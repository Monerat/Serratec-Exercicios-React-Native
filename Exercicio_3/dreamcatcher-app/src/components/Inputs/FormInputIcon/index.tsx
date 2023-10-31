import { Text, View, TextInput, ImageSourcePropType, StyleProp, ImageStyle, TextInputProps } from "react-native";



import { Button } from "../../Button";
import { styles } from "./styles";

interface FormInputIconProps extends TextInputProps {
   label: string
   iconButton: ImageSourcePropType;
   iconStyle?: StyleProp<ImageStyle>;
   onIconPress: ()=>void
}
/**
 * @param label o título(label) para o input 
 * @param iconButton o ícone do tipo ImageSourcePropType
 * @param iconStyle style a ser passado diretamente para o ícone
 * @returns 
 */
export const FormInputIcon = ({ label, iconButton, iconStyle, onIconPress, ...props }: FormInputIconProps) => {

   return (
      <View style={styles.formInputHorizontal}>
         <Text style={styles.inputLabel}>{label}</Text>
         <TextInput
            style={props.editable ? styles.textInput : styles.inputDisabled}
            placeholderTextColor="#D9D9D980"
            {...props}
         />
         <Button value={iconButton} iconStyle={iconStyle} onPress={onIconPress} />
      </View>
   );
};
