import {
   GestureResponderEvent,
   ImageSourcePropType,
   ImageStyle,
   StyleProp,
   Text,
   TextInput,
   TextInputProps,
   View
} from "react-native";

import { Button } from "../../Button";
import { styles } from "./styles";

interface FormInputProps extends TextInputProps {
   label: string;
   icon?: ImageSourcePropType;
   iconStyle?: StyleProp<ImageStyle>;
   onIconPress?: (event: GestureResponderEvent) => void;
}

export const FormInput = ({
   label,
   icon,
   iconStyle,
   onIconPress,
   ...props
}: FormInputProps) => {
   return icon ? (
      <View style={styles.formInputHorizontal}>
         <Text style={styles.inputLabel}>{label}</Text>
         <TextInput
            style={props.editable ? styles.textInput : styles.inputDisabled}
            placeholderTextColor="#D9D9D980"
            {...props}
         />
         <Button image={icon} iconStyle={iconStyle} onPress={onIconPress} />
      </View>
   ) : (
      <View style={props.multiline ? styles.formMultilineInputContainer : styles.formInputContainer}>
         <Text style={styles.inputLabel}>{label}</Text>
         <TextInput
            style={props.multiline ? styles.textMultilineInput : styles.textInput}
            placeholderTextColor="#D9D9D980"
            {...props}
         />
      </View>
   );
};
