import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function OrderItem({ order }) {
  const navigation = useNavigation();

  return (
    <View style={styles.orderItemWrapper}>
      <View style={styles.orderItemDetails}>
        <Text style={styles.orderItemTitle}>Mã đơn hàng: {order.order_no}</Text>
        <View style={styles.orderInfoGroup}>
          <View style={styles.orderInfoItem}>
            <Text style={styles.textGray}>Ngày đặt:</Text>
            <Text style={styles.textSilver}>{order.order_date}</Text>
          </View>
          <View style={styles.orderInfoItem}>
            <Text style={styles.textGray}>Tình trạng:</Text>
            <Text style={styles.textSilver}>{order.status}</Text>
          </View>
          <View style={styles.orderInfoItem}>
            <Text style={styles.textGray}>Ngày nhận hàng:</Text>
            <Text style={styles.textSilver}>{order.delivery_date}</Text>
          </View>
          <View style={styles.orderInfoItem}>
            <Text style={styles.textGray}>Thanh toán:</Text>
            <Text style={styles.textSilver}>{order.payment_method}</Text>
          </View>
        </View>
      </View>

      <View style={styles.orderOverview}>
        <View style={styles.orderOverviewContent}>
          <View style={styles.orderOverviewImg}>
            <Image
              source={order.items[0].imgSource}
              style={styles.objectFitCover} // Chỉ sử dụng style cho kích thước
              resizeMode="cover" // Truyền resizeMode như một prop
            />
          </View>
          <View style={styles.orderOverviewInfo}>
            <Text style={styles.textXl}>{order.items[0].name}</Text>
            <View>
              <Text style={styles.fontBold}>
                Màu:{" "}
                <Text style={styles.textSilver}>{order.items[0].color}</Text>
              </Text>
              <Text style={styles.fontBold}>
                Số lượng:{" "}
                <Text style={styles.textSilver}>{order.items[0].quantity}</Text>
              </Text>
              <Text style={styles.fontBold}>
                Giá:{" "}
                <Text style={styles.textSilver}>{order.items[0].price}</Text>
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.viewDetailBtn}
          onPress={() => {
            navigation.navigate("OrderDetail", { order });
          }}
        >
          <Text style={styles.viewDetailText}>Chi tiết</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

OrderItem.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    order_no: PropTypes.string.isRequired,
    order_date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    delivery_date: PropTypes.string.isRequired,
    payment_method: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        imgSource: PropTypes.any.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  orderItemWrapper: {
    marginVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#edeef2",
  },
  orderItemTitle: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  orderItemDetails: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    padding: 16,
    borderRadius: 8,
  },
  orderInfoGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  orderInfoItem: {
    width: "48%",
    marginBottom: 8,
  },
  textGray: {
    color: "#757575",
    fontWeight: "500",
  },
  textSilver: {
    color: "#b0b0b0",
    fontSize: 14,
  },
  orderOverview: {
    marginVertical: 20,
  },
  orderOverviewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  orderOverviewImg: {
    width: 80,
    height: 80,
    borderRadius: 6,
    overflow: "hidden",
  },
  objectFitCover: {
    width: "100%",
    height: "100%",
  },
  orderOverviewInfo: {
    marginLeft: 12,
    flex: 1,
  },
  textXl: {
    fontSize: 16,
    fontWeight: "bold",
  },
  fontBold: {
    fontWeight: "600",
  },
  viewDetailBtn: {
    backgroundColor: "#10b9b0",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  viewDetailText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
