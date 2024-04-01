import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../theme";
import EmptyList from "../components/emptyList";
import BackButton from "../components/backButton";
import ExpenseCard from "../components/expenseCard";

const items = [
  //add the expense data here
  {
    id: 1,
    title: "Purchased a Phone",
    amount: 10,
    date: "2021-09-01",
    category: "Shopping",
  },
  {
    id: 2,
    title: "Dinner with Friends",
    amount: 20,
    date: "2021-09-02",
    category: "Food",
  },
  {
    id: 3,
    title: "Movie Night",
    amount: 30,
    date: "2021-09-03",
    category: "Entertainment",
  },
  {
    id: 4,
    title: "Grocery Shopping",
    amount: 40,
    date: "2021-09-04",
    category: "Shopping",
  },
];

export default function TripExpensesScreen(props) {
  const { id, place, country } = props.route.params;
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="mx-4">
        <View class="relative">
          <View className="">
            <BackButton />
          </View>

          <Text
            className={`${colors.heading} font-bold text-xl text-center shadow-sm`}
          >
            {place}
          </Text>
          <Text
            className={`${colors.heading} font-bold text-md text-center shadow-sm`}
          >
            {country}
          </Text>
        </View>
        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image
            source={require("../assets/images/7.png")}
            className="w-60 h-60"
          />
        </View>
        <View className="flex-row justify-between items-center p-2 ">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Expenses
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddExpenseScreen")}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full"
          >
            <Text className={colors.heading}>Add expense</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4 px-2" style={{ height: 440 }}>
          <FlatList
            data={items}
            ListEmptyComponent={
              <EmptyList message={"No expenses recorded yet"} />
            }
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            className="mx-1"
            renderItem={({ item }) => <ExpenseCard item={item} />}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
