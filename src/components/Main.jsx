import React from "react";
import { Alert, Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar from "./NavBar";
import Product from "./Product";
import client from "../data/Client";

export default function Main({ route }) {
    const navigation = useNavigation();
    console.log(route.params);
    let verification;
    route.params ? verification = route.params.verification : verification=null;
    

    return (
        <View>
            <NavBar Verificate={verification}/>
            <View style={{
                flexDirection: 'row',
                padding: 10
            }}>
                <Product />
                <Product />
            </View>
        </View>
    )
}