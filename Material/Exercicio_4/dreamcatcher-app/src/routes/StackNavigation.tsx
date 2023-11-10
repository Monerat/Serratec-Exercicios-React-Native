import { createStackNavigator } from "@react-navigation/stack";
import { Sonho } from "../components/HomeComponent";
import { Favorite } from "../screens/Favorite";
import { Home } from "../screens/Home";
import { SonhoDetails } from "../screens/SonhoDetails";

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
