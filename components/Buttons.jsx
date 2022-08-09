import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const CircleButton = ({ imgURL, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles().circleButton, props]}
      onPress={handlePress}
    >
      <Image source={imgURL} resizeMode="contain" style={styles().icon} />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles(minWidth).rectButton, props]}
      onPress={handlePress}
    >
      <Text style={styles(fontSize).buttonText}>Place a bid</Text>
    </TouchableOpacity>
  );
};

const styles = (minWidth, fontSize) =>
  StyleSheet.create({
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

    rectButton: {
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      minWidth: minWidth,
      padding: SIZES.small,
    },

    icon: {
      width: 24,
      height: 24,
    },

    buttonText: {
      fontFamily: FONTS.semiBold,
      fontSize: fontSize,
      color: COLORS.white,
      textAlign: "center",
    },
  });
