import { Text, TouchableOpacity, TouchableOpacityProps, View, ViewProps } from "react-native";

import { TagDataProps } from "../../HomeComponent/index";
import { styles } from "./styles";

type TouchableOrView<T extends {touchable: boolean} | undefined> = T extends {touchable: true} ? BadgeTouchableProps : BadgeViewProps;

interface BadgeTouchableProps extends TouchableOpacityProps {
    tag: TagDataProps
    touchable?: boolean
}
interface BadgeViewProps extends ViewProps {
    tag: TagDataProps
    touchable?: boolean
}

export const Badge = <T extends {touchable: boolean} | undefined> ({tag, touchable, ...props}: TouchableOrView<T>) => {
   return touchable ? (
      <TouchableOpacity
         activeOpacity={0.8}
         style={styles.badge}
         {...props}>
         <Text style={{ color: "white", fontSize: 10 }}>{tag.name}</Text>
      </TouchableOpacity>
   ) : (
      <View
         style={styles.badge}
         {...props}>
         <Text style={{ color: "white", fontSize: 10 }}>{tag.name}</Text>
      </View>
   );
};
