import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function AccountScreen() {
  const navigation = useNavigation();

  const [formFields, setFormFields] = useState([
    { key: "name", label: "Tên", value: "Nguyễn Văn A" },
    { key: "email", label: "Địa chỉ email", value: "A@gmail.com" },
    { key: "phone", label: "Số điện thoại", value: "+123456789" },
    { key: "password", label: "Mật khẩu", value: "******" },
  ]);

  const handleInputChange = (key, text) => {
    setFormFields((prevFields) =>
      prevFields.map((field) =>
        field.key === key ? { ...field, value: text } : field
      )
    );
  };

  const handleSaveChange = (key) => {
    const field = formFields.find((item) => item.key === key);
    if (field) {
      alert(`Cập nhật thành công: ${field.label}`);
    }
  };

  const addresses = [
    {
      id: 1,
      tags: ["Primary", "Home"],
      name: "Nguyễn Văn A",
      location: "TPHCM",
    },
    // {
    //   id: 2,
    //   tags: ["Work"],
    //   name: "Jane Doe",
    //   location: "Dubai, UAE",
    // },
  ];

  const renderAddress = ({ item }) => (
    <View style={styles.addressItem}>
      <View style={styles.addressTags}>
        {item.tags.map((tag, index) => (
          <Text key={index} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
      <Text style={styles.textNormal}>{item.name}</Text>
      <Text style={styles.textNormal}>{item.location}</Text>
      <View style={styles.addressBtns}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => navigation.navigate("Address")}
        >
          <Text style={styles.btnText}>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={() => console.log("Address removed")}
        >
          <Text style={[styles.btnText, { color: "#3c4242" }]}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderFormField = ({ item }) => (
    <View style={styles.formElement}>
      <Text style={styles.label}>{item.label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={item.value}
          onChangeText={(text) => handleInputChange(item.key, text)}
          secureTextEntry={item.key === "password"}
          placeholder={`Nhập ${item.label}`}
        />
        <TouchableOpacity
          style={styles.changeBtn}
          onPress={() => handleSaveChange(item.key)}
        >
          <Text style={[styles.btnText, { color: "#10b9b0" }]}>Thay đổi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <FlatList
        ListHeaderComponent={() => (
          <>
            {/* Account Information */}
            <Text style={styles.subtitle}>Thông tin tài khoản</Text>
          </>
        )}
        data={formFields}
        renderItem={renderFormField}
        keyExtractor={(item) => item.key}
        ListFooterComponent={() => (
          <>
            {/* Address Section */}
            <Text style={styles.subtitle}>Địa chỉ</Text>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate("Address")}
            >
              <Text style={styles.btnText}>Thêm địa chỉ</Text>
            </TouchableOpacity>
            <FlatList
              data={addresses}
              renderItem={renderAddress}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.listContent}
            />
          </>
        )}
        contentContainerStyle={styles.listContent}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#3c4242",
  },
  formElement: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
    color: "#3c4242",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 5,
    paddingHorizontal: 14,
    fontSize: 14,
    color: "#807d7e",
  },
  changeBtn: {
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  btnText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
  addressItem: {
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 5,
    padding: 16,
    marginBottom: 16,
  },
  addressTags: {
    flexDirection: "row",
    marginBottom: 8,
  },
  tag: {
    backgroundColor: "#eee",
    padding: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  textNormal: {
    fontSize: 14,
    color: "#807d7e",
    marginBottom: 4,
  },
  addressBtns: {
    flexDirection: "row",
    marginTop: 8,
  },
  editBtn: {
    flex: 1,
    backgroundColor: "#10b9b0",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 4,
    marginRight: 8,
  },
  removeBtn: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 4,
  },
  addBtn: {
    backgroundColor: "#10b9b0",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 4,
    marginBottom: 16,
  },
  listContent: {
    padding: 16,
  },
});
