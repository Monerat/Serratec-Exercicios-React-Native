import { TouchableOpacity, TouchableOpacityProps } from "react-native";



import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
   icon?: boolean
}

export const Button = ({ icon=false, children, ...props }: ButtonProps) => {
   const returnStyle = () =>{
      return icon ? styles.buttonIcon : styles.button
   }
   return (
      <TouchableOpacity style={{ ...returnStyle(), ...()=>props.style}} {...props}>
        {children}
      </TouchableOpacity>
   );
};
