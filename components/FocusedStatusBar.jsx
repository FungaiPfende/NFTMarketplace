import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

export const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused(true);

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};
