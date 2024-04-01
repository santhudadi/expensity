import { View, Text, StatusBar, Platform } from "react-native";
import React from "react";

export default function ScreenWrapper({ children }) {
  let StatusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : Platform.OS === "ios"
    ? 60
    : 0;
  return <View style={{ paddingTop: StatusBarHeight }}>{children}</View>;
}
