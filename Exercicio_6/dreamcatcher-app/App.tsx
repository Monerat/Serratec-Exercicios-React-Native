import { StatusBar } from "expo-status-bar";

import { TabRoutes } from "./src/routes/BottomTabNavigation";

export default function App() {
   return (
      <>
         <StatusBar style="light" />
         <TabRoutes />
      </>
   );
}
