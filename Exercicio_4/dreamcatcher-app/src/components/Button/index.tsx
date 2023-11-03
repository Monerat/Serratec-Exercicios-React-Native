import { Text, TouchableOpacity, TouchableOpacityProps, Image, ImageSourcePropType, ViewStyle, StyleProp, ImageStyle } from "react-native";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
   value: string | ImageSourcePropType;
   buttonStyle?: "primary" | "secondary" | "text";
   iconStyle?: StyleProp<ImageStyle>;
   styleAdjustments?: {}
}
/**
 * @returns Componente Botão já estilizado,
 * @param value string | ImageSourcePropType
 * @param buttonStyle "primary" | "secondary" | "text"
 * @param styleAdjustments StyleProp<ViewStyle>
 * @example <Button value="Salvar" styleAdjustments={{alignItems: "flex-end"}} />
 * <Button value={PencilIcon} />
 * @default buttonStyle "primary"
 */
export const Button = ({ value, buttonStyle = "primary", iconStyle, styleAdjustments, ...props }: ButtonProps) => {

   if (typeof value === "string") {
      if (buttonStyle === "primary") {
         return (
            <TouchableOpacity style={[styles.button, {...styleAdjustments}]} {...props}>
               <Text style={styles.buttonText}> {value} </Text>
            </TouchableOpacity>
         );

      } else if (buttonStyle === "secondary") {
         return (
            <TouchableOpacity style={[styles.buttonSecondary, {...styleAdjustments}]} {...props}>
               <Text style={styles.buttonTextSecondary}> {value} </Text>
            </TouchableOpacity>
         );

      } else {
         return (
            <TouchableOpacity style={[styles.buttonVariant, {...styleAdjustments}]} {...props}>
               <Text style={[styles.buttonTextSecondary, {fontSize: 16, textDecorationLine: "underline"}]}> {value} </Text>
            </TouchableOpacity>
         );
      };
   } else {
      return (
         <TouchableOpacity style={styles.buttonIcon} {...props}>
            <Image source={value} width={16} height={16} resizeMode="contain" style={iconStyle} />
         </TouchableOpacity>
      );
   }
};
