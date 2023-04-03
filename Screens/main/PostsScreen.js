import React from "react";
import {TouchableOpacity,} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommentsScreen from "../nested/CommentsScreen";
import MapScreen from "../nested/MapScreen";
import DefaultPostsScreen from "../nested/DefaultPostsScreen";
import { Feather} from "@expo/vector-icons";

const NestedScreen = createNativeStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        options={{
          title: "Публикации",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 16 }}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Комментарии",
          headerTitleAlign: "center",
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Карта",
          headerTitleAlign: "center",
        }}
      />
    </NestedScreen.Navigator>
  );
};
export default PostsScreen;
