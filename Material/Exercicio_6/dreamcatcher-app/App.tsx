import * as React from 'react';
import { StatusBar } from "expo-status-bar";

import { FavoritesProvider } from "./src/contexts/FavoritesContext";
import { TabRoutes } from "./src/routes/BottomTabNavigation";

export default function App() {
   return (
      <FavoritesProvider>
         <StatusBar style="light" />
         <TabRoutes />
      </FavoritesProvider>
   );
}
