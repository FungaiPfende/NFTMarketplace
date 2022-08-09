import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const CircleButton = ({ imgURL, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.circleButton, props]}
      onPress={handlePress}
    >
      <Image source={imgURL} resizeMode="contain" style={styles.icon} />
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
  },

  icon: {
    width: 24,
    height: 24,
  },
});
