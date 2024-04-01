import { View, Text } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";

export default function LoginScreen() {
  return (
    <ScreenWrapper>
      <Text className="text-green-600">Welcome to Login Screen!</Text>
      <Text>Changes you make will automatically reload</Text>
    </ScreenWrapper>
  );
}
