import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View>
        <View className="flex items-center">
          <Image
            source={require("../assets/welcome.gif")}
            className="h-96 w-96 shadow"
          />
        </View>
        <View className="mx-5 mb-20">
          <Text className="text-3xl font-bold text-center mb-10">
            Expensity
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            className="bg-green-500 p-4 rounded-full mb-5"
          >
            <Text className="text-white text-center font-bold">Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
            className="bg-green-500 p-4 rounded-full mb-5"
          >
            <Text className="text-white text-center font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
