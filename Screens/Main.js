import RegistrationScreen from "../Screens/auth/RegistrationScreen";
import LoginScreen from "../Screens/auth/LoginScreen";
import Home from "../Screens/main/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { updateUserStatus } from "../redux/auth/authOperations";
import { getIsLoggedIn } from "../redux/auth/authSelectors";

const AuthStack = createNativeStackNavigator();

export default function Main() {
  const isLogedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUserStatus());
  }, [isLogedIn]);

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        {!isLogedIn ? (
          <>
            <AuthStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <AuthStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <AuthStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
