import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Main";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import Profile from "./Profile";
<<<<<<< HEAD
import CreateAccount from "./CreateAccount";
=======
import WishList from "./WishList";
import PaymentMethod from "./PaymentMethod";
import AddLittleCar from "./AddLittleCar";
import History from "./History";

>>>>>>> fd4ebda21e398ea625b57e5ef95995d0e9bd76f7

const Navigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator 
        screenOptions={{ headerShown: false}}>
            <Stack.Screen
                name="adLittleCar"
                component={AddLittleCar}
            />
            <Stack.Screen
                name="history"
                component={History}
            />
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
            <Stack.Screen 
<<<<<<< HEAD
                name="createAccount"
                component={CreateAccount}
            />
=======
                name="wish"
                component={WishList}
            />
            <Stack.Screen 
                name="payMethod"
                component={PaymentMethod}
            />

>>>>>>> fd4ebda21e398ea625b57e5ef95995d0e9bd76f7
        </Stack.Navigator>
    )
}

export default Navigator;