import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const { width } = Dimensions.get("window");

const AddressScreen = ({ navigation }) => {
  const handleCancel = () => navigation.navigate("Account");
  const handleRemove = () => navigation.navigate("");

  const formFields = [
    {
      label: "Tỉnh",
      placeholder: "...",
      type: "input",
    },
    {
      label: "Quận/Huyện",
      placeholder: "...",
      type: "input",
    },
    {
      label: "Phường/Xã",
      placeholder: "...",
      type: "input",
    },
    {
      label: "Đường",
      placeholder: "...",
      type: "input",
    },
  ];

  const renderItem = ({ item }) => {
    if (item.type === "input") {
      return (
        <View style={styles.formElement}>
          <Text style={styles.label}>{item.label}</Text>
          <TextInput style={styles.input} placeholder={item.placeholder} />
        </View>
      );
    } else if (item.type === "picker") {
      return (
        <View style={styles.formElement}>
          <Text style={styles.label}>{item.label}</Text>
          <Picker style={styles.input}>
            {item.options.map((option, index) => (
              <Picker.Item
                key={index}
                label={option}
                value={option.toLowerCase()}
              />
            ))}
          </Picker>
        </View>
      );
    } else if (item.type === "textarea") {
      return (
        <View style={styles.formElement}>
          <Text style={styles.label}>{item.label}</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder={item.placeholder}
            multiline
          />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>My Account - Add Address</Text> */}
      <FlatList
        data={formFields}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.btnTextSave}>Lưu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={handleCancel}>
          <Text style={styles.btnText}>Hủy</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.removeBtn} onPress={handleRemove}>
          <Text style={styles.btnText}>Xóa</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 16,
    color: "#3c4242",
  },
  listContent: {
    paddingBottom: 32,
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
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 5,
    paddingHorizontal: 14,
    fontSize: 14,
    color: "#807d7e",
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  saveBtn: {
    flex: 1,
    backgroundColor: "#10b9b0",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 4,
    marginRight: 8,
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: "#f6f6f6",
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
  btnText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  btnTextSave: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
});

export default AddressScreen;
