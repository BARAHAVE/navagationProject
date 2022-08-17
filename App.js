import {StyleSheet,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FirstPage from "./Screens/FirstPage";
import SecondPage from "./Screens/SecondPage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: { backgroundColor: "#3820DC"  },
          headerTintColor: "#ffff",
          headerTitleStyle: { fontWeight: "900", fontSize: 35 },
        }}
      >
        <Stack.Screen name="First Page" component={FirstPage} />
        <Stack.Screen name="Second Page" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 35,
    textAlign: "center",
    marginVertical: 10, 
  },
  textStyle: {
    textAlign: "center",
    fontSize: 25,
  },
});
