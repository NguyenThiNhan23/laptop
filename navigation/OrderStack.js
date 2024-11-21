import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OrderListScreen } from "../screens/user/OrderListScreen"; // Đường dẫn tới OrderListScreen
import { OrderDetailScreen } from "../screens/user/OrderDetailScreen"; // Đường dẫn tới OrderDetailScreen

const Stack = createStackNavigator();

export default function OrderStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderList"
        component={OrderListScreen}
        options={{ title: "Đơn hàng của bạn" }}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{ title: "Chi tiết đơn hàng" }}
      />
    </Stack.Navigator>
  );
}
