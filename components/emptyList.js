import React from "react";
import { Text, View, Image } from "react-native";

export default function EmptyList({ message }) {
  return (
    <View className="flex justify-center items-center my-5 space-y-5">
      <Image
        source={require("../assets/images/empty.png")}
        className="w-36 h-36 shadow"
      />
      <Text className="text-gray-600 font-bold">
        {message || "Data not found"}
      </Text>
    </View>
  );
}
