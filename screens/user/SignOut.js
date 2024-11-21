import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const SignOutScreen = () => {
  const handleCancel = () => navigation.navigate("");
  const handleSignOut = () => navigation.navigate("");

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Company Info */}
        <View style={styles.companyInfo}>
          <Image
            source={require("../../assets/images/signout.png")}
            style={styles.companyLogo}
          />
          <Text style={styles.companyTitle}>Website bán laptop</Text>
        </View>

        {/* Sign Out Section */}
        <View style={styles.signOutSection}>
          <Text style={styles.heading}>Bạn chắc chắn muốn đăng xuất?</Text>
          {/* Sign Out Button */}
          <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Đăng xuất</Text>
          </TouchableOpacity>
          {/* Cancel Button */}
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={handleCancel}
          >
            <Text style={[styles.buttonText, styles.cancelButtonText]}>
              Hủy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  mainContent: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    boxShadow: "0 5px 5px rgba(0,0,0,0.4)",
  },
  companyInfo: {
    flex: 1,
    backgroundColor: "#63c9c6",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  companyLogo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  companyTitle: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginTop: -40,
  },
  signOutSection: {
    flex: 2,
    padding: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    color: "#63c9c6",
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#63c9c6",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  cancelButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#63c9c6",
  },
  cancelButtonText: {
    color: "#63c9c6",
  },
});

export default SignOutScreen;
