import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Main";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import Profile from "./Profile";

const Navigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator 
        screenOptions={{ headerShown: false,}}>
            <Stack.Screen
                name="main"
                component={Main}
            />
            <Stack.Screen
                name="login"
                component={Login}
            />
            <Stack.Screen
                name="productDetails"
                component={ProductDetails}
            />
            <Stack.Screen 
                name="profile"
                component={Profile}
            />
        </Stack.Navigator>
    )
}

export default Navigator;