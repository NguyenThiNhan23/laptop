import React from "react";
import PropTypes from "prop-types";
import { FlatList, View } from "react-native";
import { OrderItem } from "./OrderItem";

export function OrderItemList({ orders }) {
  // if (!orders || orders.length === 0) {
  //   return <Text>No orders available</Text>;
  // }
  // console.log(orders); // Kiểm tra xem dữ liệu orders có đúng không

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OrderItem order={item} />} // Truyền cả đơn hàng
      />
    </View>
  );
}
