import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function Title({ titleText }) {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.titleText}>{titleText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleWrapper: {
    marginBottom: 20, // Thêm margin dưới tiêu đề nếu cần
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold", // Định dạng tiêu đề với font-size và font-weight
  },
});
