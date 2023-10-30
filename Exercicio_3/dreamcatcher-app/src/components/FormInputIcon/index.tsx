import { Text, View, TextInput, Image, ImageSourcePropType, StyleProp, ImageStyle, TextInputProps } from "react-native";

import { Button } from "../Button";
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
            style={styles.textInput}
            placeholderTextColor="#D9D9D980"
            {...props}
         />
         <Button icon onPress={onIconPress}>
            <Image
               source={iconButton}
               resizeMode="contain"
               style={iconStyle}
            />
         </Button>
      </View>
   );
};
