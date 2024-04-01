import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../theme";
import randomImage from "../assets/randomImage";
import EmptyList from "../components/emptyList";
import TripExpensesScreen from "./TripExpensesScreen";

const items = [
  {
    id: 1,
    place: "Trip to Paris",
    country: "France",
  },
  {
    id: 2,
    place: "Trip to London",
    country: "England",
  },
  {
    id: 3,
    place: "Trip to New York",
    country: "USA",
  },
  {
    id: 4,
    place: "Trip to Tokyo",
    country: "Japan",
  },
  {
    id: 5,
    place: "Trip to Sydney",
    country: "Australia",
  },
  {
    id: 6,
    place: "Trip to Dubai",
    country: "UAE",
  },
  {
    id: 7,
    place: "Trip to Singapore",
    country: "Singapore",
  },
  {
    id: 8,
    place: "Trip to Rome",
    country: "Italy",
  },
  {
    id: 9,
    place: "Trip to Berlin",
    country: "Germany",
  },
  {
    id: 10,
    place: "Trip to Moscow",
    country: "Russia",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensity
        </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-pink-200 rounded-xl mx-4 mb-4">
        <Image
          source={require("../assets/images/banner.png")}
          className="w-60 h-60"
        />
      </View>
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-xl`}>
          Recent Tripes
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddTripScreen")}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full"
        >
          <Text className={colors.heading}>Add trip</Text>
        </TouchableOpacity>
      </View>
      <View
        className="flex-row justify-between items-center px-4 py-1"
        style={{ height: 440 }}
      >
        <FlatList
          data={[...items]}
          numColumns={2}
          ListEmptyComponent={<EmptyList message={"No tripes recorded yet"} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          className="mx-1"
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TripExpensesScreen", { ...items })
              }
              className="flex-1 m-1 p-3 bg-white rounded-xl shadow-sm"
            >
              <View className="flex items-center justify-center">
                <Image source={randomImage()} className="w-36 h-36 mb-2" />
                <Text className={`${colors.heading} font-bold`}>
                  {item.place}
                </Text>
                <Text className={`${colors.text} text-xs`}>{item.country}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}
