import React, { useMemo, useState, useEffect } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";
import format from "../services/formatVND";
import ghtkImg from "../assets/GHTK.png";
import { useStripe } from "@stripe/stripe-react-native";
import SectionHeader from "../components/cart/SectionHeader";

export default function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const navigation = useNavigation();

  // Replace this with a client secret retrieved from your backend
  const mockClientSecret = "pi_12345_secret_67890"; // For testing only

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      paymentIntentClientSecret: mockClientSecret,
    });

    if (error) {
      console.log("Failed to initialize payment sheet", error.message);
    } else {
      console.log("Payment sheet initialized");
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert("Thanh toán thất bại", error.message);
    } else {
      Alert.alert("Thanh toán thành công", "Đặt hàng thành công!");
    }
  };

  const paymentMethodRadioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Thanh toán khi nhận hàng (COD)",
        value: "cod",
      },
      {
        id: "2",
        label: "Thanh toán bằng thẻ tín dụng",
        value: "card",
      },
    ],
    []
  );

  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState("1");

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <SectionHeader
            title="1. Địa chỉ giao hàng"
            editLinkEnabled={true}
            //handlePress={() => navigation.navigate("EditForm")}
          />

          <View style={styles.textContainer}>
            <Text style={styles.customerName}>Trần Trọng Nhân</Text>
            <Text style={styles.customerAddress}>
              Số 123, Đường Nguyễn Văn A, Thành Phố X
            </Text>
            <Text style={styles.customerPhoneNumber}>(+84) 123456789</Text>
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader
            title="2. Phương thức vận chuyển"
            editLinkEnabled={true}
          />

          <View style={styles.shippingContainer}>
            <Image source={ghtkImg} style={styles.shippingImage} />
            <View style={styles.textContainer}>
              <Text style={styles.shippingName}>Giao hàng tiết kiệm</Text>
              <Text style={styles.shippingPrice}>Miễn phí</Text>
              <Text style={styles.shippingInfo}>
                Nhận hàng vào 16/11 - 18/11
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader
            title="3. Phương thức thanh toán"
            editLinkEnabled={false}
          />

          <RadioGroup
            radioButtons={paymentMethodRadioButtons}
            onPress={setSelectedPaymentMethodId}
            selectedId={selectedPaymentMethodId}
            layout="column"
            containerStyle={{ alignItems: "flex-start" }}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>Tổng thanh toán</Text>
          <Text style={styles.totalPrice}>{format(20990000 * 7)}</Text>
        </View>

        {selectedPaymentMethodId == 2 ? (
          <Pressable style={styles.button} onPress={openPaymentSheet}>
            <Text style={styles.buttonText}>Thanh toán</Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("OrderSuccess")}
          >
            <Text style={styles.buttonText}>Đặt hàng</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  section: {
    gap: 5,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
  },
  textContainer: {
    flexDirection: "column",
    marginHorizontal: 20,
  },
  customerName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  customerAddress: {
    fontSize: 14,
  },
  customerPhoneNumber: {
    fontSize: 14,
  },
  shippingName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  shippingPrice: {
    fontSize: 14,
    color: colors["primary-800"],
    fontWeight: "500",
  },
  shippingInfo: {
    fontSize: 14,
  },
  shippingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  shippingImage: {
    width: "20%",
    height: 50,
    resizeMode: "contain",
  },
  footer: {
    paddingTop: 15,
    backgroundColor: "#fff",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginHorizontal: 25,
  },
  totalPriceText: {
    marginRight: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors["primary-700"],
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#28ccc7",
    padding: 12,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    columnGap: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
