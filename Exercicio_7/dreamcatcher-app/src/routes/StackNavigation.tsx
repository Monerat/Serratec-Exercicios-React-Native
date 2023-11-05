import { createStackNavigator } from "@react-navigation/stack";
import { Home, Sonho, TagDataProps } from "../screens/Home";
import { SonhoDetails } from "../screens/SonhoDetails";
import { Favorite } from "../screens/Favorite";

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
   SonhosStack: undefined;
   FavoritosStack: undefined;
   Detalhes: {sonhoSelecionado: Sonho};
};

export const StackHomeDetailsRoute = () => {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SonhosStack">
         <Stack.Screen name="SonhosStack" component={Home} />
         <Stack.Screen name="Detalhes" component={SonhoDetails} />
      </Stack.Navigator>
   );
};

export const StackFavoritosDetailsRoute = () => {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="FavoritosStack">
         <Stack.Screen name="FavoritosStack" component={Favorite} />
         <Stack.Screen name="Detalhes" component={SonhoDetails} />
      </Stack.Navigator>
   );
};
