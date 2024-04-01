import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return <AppNavigation />;
}
