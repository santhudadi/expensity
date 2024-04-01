import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "react-native-screens";
import { ModalScreen } from "react-native-screens";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AddTripScreen from "../screens/AddTripScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import TripExpensesScreen from "../screens/TripExpensesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          options={{ headerShown: false, presentation: "modal" }}
          name="SignInScreen"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false, presentation: "modal" }}
          name="SignUpScreen"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
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
}
