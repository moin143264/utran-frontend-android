import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Auth Screens
import LoginScreen from "../screens/common/LoginScreen";
import SignupScreen from "../screens/common/SignupScreen";
import OTPVerificationScreen from "../screens/auth/OTPVerificationScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";

// Role-based Navigators
import {
  AdminNavigator,
  OrganizerNavigator,
  ParticipantNavigator,
} from "./RoleNavigator";

// Auth Context
import { useAuth } from "../context/AuthContext";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null; // Or a loading screen component
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          // Auth Stack
          <Stack.Group>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ animationTypeForReplace: !user ? "pop" : "push" }}
            />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          </Stack.Group>
        ) : (
          // Role-based Stack
          <Stack.Screen
            name="Main"
            component={
              user.role === "admin"
                ? AdminNavigator
                : user.role === "organizer"
                ? OrganizerNavigator
                : ParticipantNavigator
            }
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
