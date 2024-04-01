import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../theme";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function BackButton({ onPress }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HomeScreen")}
      className="bg-white rounded-full h-8 w-8 flex items-center justify-center"
    >
      <ChevronLeftIcon
        style={{ color: colors.button, width: 20, height: 20 }}
      />
    </TouchableOpacity>
  );
}
