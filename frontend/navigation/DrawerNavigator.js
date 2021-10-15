import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import Found from "../screens/Founfile";
import AddFound from "../screens/AddFound";
import FeedBack from "../screens/About";
import Lostfile from "../screens/Lostfile";
import AddLost from "../screens/AddLost";
import LoginScreen from "../screens/Home";




const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={LoginScreen} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="Found" component={Found} />
      <Drawer.Screen name="AddFound" component={AddFound} />
        <Drawer.Screen name="AddLost" component={AddLost} />
        <Drawer.Screen name="Lost" component={Lostfile}/>
        <Drawer.Screen name="Feedback" component={FeedBack}/>





    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
