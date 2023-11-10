import {
   Text,
   TouchableOpacity,
   TouchableOpacityProps,
   Image,
   ImageSourcePropType,
   ViewStyle,
   StyleProp,
   ImageStyle,
} from "react-native";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
   text?: string;
   image?: ImageSourcePropType;
   buttonStyle?: "primary" | "secondary" | "text";
   iconStyle?: StyleProp<ImageStyle>;
   iconBackground?: boolean;
   styleAdjustments?: {};
}

/**
 * @returns Componente Botão já estilizado,
 * @param text string
 * @param image ImageSourcePropType
 * @param buttonStyle "primary" | "secondary" | "text"
 * @param styleAdjustments StyleProp<ViewStyle>
 * @example <Button text="Salvar" styleAdjustments={{alignItems: "flex-end"}} />
 * <Button image={PencilIcon} />
 * @default buttonStyle "primary"
 */

export const Button = ({
   text,
   image,
   buttonStyle = "primary",
   iconStyle,
   iconBackground,
   styleAdjustments,
   ...props
}: ButtonProps) => {

   const selecionaButtonStyle = () =>{
      if(buttonStyle === "primary"){
         return styles.button
      } else if (buttonStyle === "secondary") {
         return styles.buttonSecondary
      } else if (buttonStyle === "text") {
         return styles.buttonVariant
      }
      
         return styles.buttonIcon
   };

   return (
      <TouchableOpacity style={[selecionaButtonStyle(), { ...styleAdjustments }]} {...props}>
         {text && <Text style={buttonStyle === "primary" ? styles.buttonText : styles.buttonTextSecondary}> {text} </Text>}
         {image && <Image source={image} width={16} height={16} resizeMode="contain" style={iconStyle} />}
      </TouchableOpacity>
   );
};
