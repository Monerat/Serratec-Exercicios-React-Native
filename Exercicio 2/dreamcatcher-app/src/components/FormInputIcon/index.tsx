import { Text, View, TextInput, Image, ImageSourcePropType, StyleProp, ImageStyle } from "react-native";

import { Button } from "../Button";
import { styles } from "./styles";

interface FormInputIconProps {
   label: string;
   placeholder?: string;
   value: string;
   setValue: React.Dispatch<React.SetStateAction<string>>;
   iconButton?: ImageSourcePropType;
   iconStyle?: StyleProp<ImageStyle>;
   multiline?: boolean;
}

export const FormInputIcon = ({ label, placeholder, iconButton, iconStyle, value, setValue }: FormInputIconProps) => {
   return (
      <View style={styles.formInputHorizontal}>
         <Text style={styles.inputLabel}>Data:</Text>
         <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor="#D9D9D980"
         />
         <Button icon>
            <Image
               source={iconButton}
               resizeMode="contain"
               style={iconStyle}
            />
         </Button>
      </View>
   );
};
