import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../screens/user/AccountScreen"; // Đường dẫn tới AccountScreen
import AddressScreen from "../screens/user/AddressScreen"; // Đường dẫn tới AddressScreen

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{ title: "Địa chỉ" }}
      />
    </Stack.Navigator>
  );
}
