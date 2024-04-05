import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { colors } from "../theme";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function SignInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addTrip = () => {
    if (email && password) {
      navigation.goBack();
      navigation.navigate("HomeScreen");
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View class="relative mt-5">
            <View className="">
              <BackButton />
            </View>

            <Text
              className={`${colors.heading} font-bold text-xl text-center shadow-sm`}
            >
              Sign Up
            </Text>
          </View>
          <View className="flex-row items-center justify-center mx-4 my-4 rounded-xl">
            <Image
              source={require("../assets/images/signup.png")}
              className="w-72 h-72"
            />
          </View>
          <View>
            <Text className={`${colors.heading} font-bold text-sm mx-2`}>
              Please enter your details below to signup for an account!
            </Text>
            <View className="mx-2 my-4 space-y-2">
              <Text className={`${colors.heading} text-md font-bold`}>
                Email
              </Text>
              <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                className="p-4 mb-3 bg-white rounded-full"
              />
              <Text className={`${colors.heading} text-md font-bold`}>
                Password
              </Text>
              <TextInput
                value={password}
                secureTextEntry
                onChangeText={(value) => setPassword(value)}
                className="p-4 mb-3 bg-white rounded-full"
              />
            </View>

            <View>
              <TouchableOpacity
                onPress={addTrip}
                className="p-3 px-3 mx-2 my-5 bg-green-500 border border-gray-200 rounded-full"
              >
                <Text className="text-lg font-bold text-center text-white">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
