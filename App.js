import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import { LogBox } from 'react-native';
 
import Tarefas from "./src/pages/Tarefas/";
import NewTarefas from "./src/pages/NewTarefas/";
import Details from "./src/pages/Details/";
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tarefas">
        <Stack.Screen
          name="Tarefas"
          component={Tarefas}
          options={{
            headerTintColor: "#3FB2D4",
          }}
        />
        <Stack.Screen
          name="New Tarefas"
          component={NewTarefas}
          options={{
            headerTintColor: "#3FB2D4",
          }}
          
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#3FB2D4",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
