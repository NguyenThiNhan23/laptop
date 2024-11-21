import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import avatarImage from "../../assets/images/avatar.png";

export function UserMenu() {
  const navigation = useNavigation();
  const route = useRoute();
  const [avatar, setAvatar] = useState(avatarImage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Quyền bị từ chối",
        "Chúng tôi cần quyền truy cập thư viện ảnh để thay đổi ảnh đại diện."
      );
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const handleAvatarChange = async () => {
    try {
      // Sử dụng đúng API và tham số mediaTypes
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All, // Cấu hình chính xác
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (result && result.assets && result.assets.length > 0) {
        setAvatar({ uri: result.assets[0].uri });
      } else {
        console.log("No image selected or error occurred.");
      }
    } catch (error) {
      console.error("Error selecting image:", error);
      Alert.alert("Lỗi", "Không thể đổi ảnh, vui lòng thử lại.");
    }
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userInfo} onPress={toggleMenu}>
        <Image
          source={avatar.uri ? { uri: avatar.uri } : avatar}
          style={styles.avatar}
        />
        <Text style={styles.userName}>Hello Richard</Text>
      </TouchableOpacity>

      {isMenuOpen && (
        <View style={styles.menuPopup}>
          <TouchableOpacity onPress={openModal} style={styles.menuOption}>
            <Text>Xem ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleAvatarChange}
            style={styles.menuOption}
          >
            <Text>Đổi ảnh</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        visible={isModalOpen}
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Image
              source={avatar.uri ? { uri: avatar.uri } : avatar}
              style={styles.modalImage}
            />
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* <View style={styles.navMenuList}>
        <TouchableOpacity
          style={[
            styles.navMenuItem,
            route.name === "Order" && styles.activeLink,
          ]}
          onPress={() => navigation.navigate("Order")}
        >
          <Image
            source={require("../../assets/icons/ac_orders.png")}
            style={styles.icon}
          />
          <Text>My orders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navMenuItem,
            route.name === "Account" && styles.activeLink,
          ]}
          onPress={() => navigation.navigate("Account")}
        > */}
      {/* <Image
            source={require("../../assets/icons/ac_user.png")}
            style={styles.icon}
          /> */}
      {/* <Text>My Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navMenuItem}
          onPress={() => navigation.navigate("Home")}
        >
          {/* <Image
            source={require("../../assets/icons/ac_sign_out.png")}
            style={styles.icon}
          /> */}
      {/* <Text>Sign out</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 32,
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuPopup: {
    position: "absolute",
    top: 70,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  menuOption: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
