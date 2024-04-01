import React from "react";
import { Text, View, Image } from "react-native";
import { categoryColors } from "../theme";

export default function ExpenseCard({ item }) {
  return (
    <View
      style={{ backgroundColor: categoryColors[item.category] }}
      className="flex-row justify-between mb-4 rounded-xl p-4"
    >
      <View className="space-y-1">
        <Text className="text-gray-600 font-bold">{item.title}</Text>
        <Text className="text-gray-500">{item.date}</Text>
        <Text className="text-gray-500">{item.category}</Text>
      </View>
      <View>
        <Text className="text-gray-600 font-bold">${item.amount}</Text>
      </View>
    </View>
  );
}
