import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { colors } from "../theme";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { categories } from "../constants/index";

export default function AddTripScreen() {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleAddExpense = () => {
    if (title && amount && date && category) {
      navigation.goBack();
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
              Add Expense
            </Text>
          </View>
          <View className="flex-row justify-center items-center rounded-xl mx-4 my-3">
            <Image
              source={require("../assets/images/expenseBanner.png")}
              className="w-72 h-56"
            />
          </View>
          <View>
            <Text className={`${colors.heading} font-bold text-xl mx-2`}>
              Expense Details
            </Text>
            <View className="my-4 space-y-2 mx-2">
              <Text className={`${colors.heading} text-md font-bold`}>
                For What?
              </Text>
              <TextInput
                value={title}
                onChangeText={(value) => setTitle(value)}
                className="p-4 bg-white rounded-full mb-3"
              />
              <Text className={`${colors.heading} text-md font-bold`}>
                How Much?
              </Text>
              <TextInput
                value={amount}
                onChangeText={(value) => setAmount(value)}
                className="p-4 bg-white rounded-full mb-3"
              />
              <Text className={`${colors.heading} text-md font-bold`}>
                When?
              </Text>
              <TextInput
                value={date}
                onChangeText={(value) => setDate(value)}
                className="p-4 bg-white rounded-full mb-3"
              />
            </View>
            <View className="mx-2 space-y-2">
              <Text className={`${colors.heading} font-bold text-md`}>
                Category
              </Text>
              <View className="flex-row flex-wrap items-center">
                {categories.map((cat) => {
                  let bgColor = "bg-white";
                  if (cat.value == category) bgColor = "bg-green-200";
                  return (
                    <TouchableOpacity
                      onPress={() => setCategory(cat.value)}
                      key={cat.value}
                      className={`${bgColor} rounded-full px-4 py-2 mb-2 mr-2`}
                    >
                      <Text className={colors.heading}>{cat.title}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <View>
                <TouchableOpacity
                  onPress={handleAddExpense}
                  className="my-5 p-3 px-3 bg-green-500 border border-gray-200 rounded-full mx-2"
                >
                  <Text className="text-center text-white text-lg font-bold">
                    Add Expense
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
