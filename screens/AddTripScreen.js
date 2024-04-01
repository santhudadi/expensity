import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { colors } from "../theme";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function AddTripScreen() {
  const navigation = useNavigation();
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");

  const addTrip = () => {
    if (place && country) {
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
              Add Trip
            </Text>
          </View>
          <View className="flex-row justify-center items-center rounded-xl mx-4 my-4">
            <Image
              source={require("../assets/images/banner.png")}
              className="w-72 h-72"
            />
          </View>
          <View>
            <Text className={`${colors.heading} font-bold text-xl mx-2`}>
              Trip Details
            </Text>
            <View className="my-4 space-y-2 mx-2">
              <Text className={`${colors.heading} text-md font-bold`}>
                Where on the Earth?
              </Text>
              <TextInput
                value={place}
                onChangeText={(value) => setPlace(value)}
                className="p-4 bg-white rounded-full mb-3"
              />
              <Text className={`${colors.heading} text-md font-bold`}>
                Which Country
              </Text>
              <TextInput
                value={country}
                onChangeText={(value) => setCountry(value)}
                className="p-4 bg-white rounded-full mb-3"
              />
            </View>

            <View>
              <TouchableOpacity
                onPress={addTrip}
                className="my-5 p-3 px-3 bg-green-500 border border-gray-200 rounded-full mx-2"
              >
                <Text className="text-center text-white text-lg font-bold">
                  Add Trip
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
