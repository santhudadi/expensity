import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddTripScreen from "../screens/AddTripScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import TripExpensesScreen from "../screens/TripExpensesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user } = useSelector((state) => state.user);

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddTripScreen"
            component={AddTripScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddExpenseScreen"
            component={AddExpenseScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="TripExpensesScreen"
            component={TripExpensesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUpScreen">
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignInScreen"
            component={SignInScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUpScreen"
            component={SignUpScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="WelcomeScreen"
            component={WelcomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
