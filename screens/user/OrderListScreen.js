import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
// import Breadcrumb from "../../components/common/Breadcrumb";
import { UserMenu } from "../../components/user/UserMenu";
import { Title } from "../../components/common/Title";
import { orderData } from "../../data/data";
import { OrderItemList } from "../../components/user/OrderItemList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
  },
  wrapper: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#f6f6f6",
  },
  activeTabButton: {
    borderBottomColor: "#3c4242",
  },
  tabButtonsContainer: {
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 20,
    justifyContent: "space-around",
  },
  tabContent: {
    flex: 1,
  },
  tabText: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#6c757d",
  },
  activeTabText: {
    fontWeight: "bold",
    color: "#3c4242",
  },
  emptyText: {
    textAlign: "center",
    color: "#6c757d",
    fontSize: 16,
    marginTop: 20,
  },
});

export function OrderListScreen() {
  const [activeTab, setActiveTab] = useState("Hoạt động");

  // Lọc dữ liệu theo trạng thái
  const filteredData = orderData.filter((order) => {
    if (activeTab === "Hoạt động") {
      return ["Chờ xác nhận", "Đang chuẩn bị", "Đang giao", "Đã giao"].includes(
        order.status
      );
    }
    return order.status === activeTab;
  });

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* Menu người dùng */}
        {/* <UserMenu /> */}

        <View style={{ flex: 1 }}>
          {/* Tiêu đề */}
          {/* <Title titleText="My Orders" /> */}

          {/* Tabs */}
          <View style={styles.tabButtonsContainer}>
            {["Hoạt động", "Đã hủy", "Hoàn tất"].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tabButton,
                  activeTab === tab && styles.activeTabButton,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Nội dung của từng tab */}
          <View style={styles.tabContent}>
            {filteredData.length > 0 ? (
              <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <OrderItemList orders={[item]} />}
                contentContainerStyle={{ flexGrow: 1 }}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <Text style={styles.emptyText}>
                {activeTab === "Hoạt động"
                  ? "No active orders available."
                  : activeTab === "Đã hủy"
                  ? "No cancelled orders."
                  : "No completed orders."}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
