import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";

import BgImage from "../assets/bg-padrao.png";
import StarFilled from "../assets/favorite-true.png";
import Diario from "../assets/journal.png";
import { StackFavoritosDetailsRoute, StackHomeDetailsRoute } from "./StackNavigation";

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
   Sonhos: undefined;
   Favoritos: undefined;
};

export const TabRoutes = () => {
   return (
      <NavigationContainer>
         <Tab.Navigator
            screenOptions={{
               headerShown: false,
               tabBarBackground: () => {
                  return (
                     <Image
                        source={BgImage}
                        resizeMode="cover"
                        style={{ position: "relative", left: 0, width: "100%", flex: 1 }}
                     />
                  );
               },
               tabBarInactiveBackgroundColor: "##5C5FB250",
               tabBarStyle: { backgroundColor: "#5C5FB2", 
                  // paddingTop: 4.5, paddingBottom: 8 
               },
               tabBarActiveTintColor: "#DD8EEA",
               tabBarInactiveTintColor: "#DD8EEA80",
            }}>
            <Tab.Screen
               name="Sonhos"
               component={StackHomeDetailsRoute}
               options={{
                  tabBarIcon: ({ color }) => (
                     <Image resizeMode="contain" source={Diario} style={{ tintColor: color, width: 30 }} />
                  ),
               }}
            />
            <Tab.Screen
               name="Favoritos"
               component={StackFavoritosDetailsRoute}
               options={{
                  tabBarIcon: ({ color }) => (
                     <Image resizeMode="contain" source={StarFilled} style={{ tintColor: color, width: 30 }} />
                  ),
               }}
            />
         </Tab.Navigator>
      </NavigationContainer>
   );
};
