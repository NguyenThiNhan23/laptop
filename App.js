import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StripeProvider } from "@stripe/stripe-react-native";

import ProductDetailScreen from "./screens/ProductDetailsScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderSuccessScreen from "./screens/OrderSuccessScreen";
import OrderStack from "./navigation/OrderStack";
import AccountStack from "./navigation/AccountStack";
import SignOutScreen from "./screens/user/SignOut";
import { UserMenu } from "./components/user/UserMenu";
import CustomTabIcon from "./components/ui/CustomTabIcon";
import colors from "./constants/colors";

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

/** Account Top Tabs */
const AccountTabs = () => (
  <View style={{ flex: 1 }}>
    <View
      style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 }}
    >
      <UserMenu />
    </View>
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: { marginTop: 100 },
      }}
    >
      <TopTab.Screen name="My Orders" component={OrderStack} />
      <TopTab.Screen name="My Account" component={AccountStack} />
      <TopTab.Screen name="Sign Out" component={SignOutScreen} />
    </TopTab.Navigator>
  </View>
);

/** Bottom Tab Navigator */
function BottomNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 20,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabIcon focused={focused} size={size} color={color}>
              <AntDesign
                name="home"
                color={focused ? colors["primary-800"] : color}
                size={focused ? size + 4 : size}
              />
            </CustomTabIcon>
          ),
        }}
      />
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabIcon focused={focused} size={size} color={color}>
              <MaterialIcons
                name="category"
                color={focused ? colors["primary-800"] : color}
                size={focused ? size + 4 : size}
              />
            </CustomTabIcon>
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Giỏ hàng",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabIcon focused={focused} size={size} color={color}>
              <MaterialIcons
                name="shopping-cart"
                color={focused ? colors["primary-800"] : color}
                size={focused ? size + 4 : size}
              />
            </CustomTabIcon>
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountTabs}
        options={{
          headerShown: false,
          // title: "Tài khoản", // Bạn có thể thêm title nếu cần
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size, focused }) => (
            <CustomTabIcon focused={focused} size={size} color={color}>
              <Icon
                name="person"
                color={focused ? colors["primary-800"] : color}
                size={focused ? size + 4 : size}
              />
            </CustomTabIcon>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/** Stack Navigator */
function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            title: "Thanh toán",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="OrderSuccess"
          component={OrderSuccessScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <StripeProvider publishableKey={process.env.STRIPE_PUBLISHABLE_KEY}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StackNavigator />
    </StripeProvider>
  );
}
