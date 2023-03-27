import React from "react";
import { Alert, Button, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar from "./NavBar";
import Product from "./Product";
import videogames from "../data/data";
import useVideojuegos from "../data/useVideojuegos";

export default function Main({ route }) {
    const navigation = useNavigation();
    let verification;
    route.params ? verification = route.params.verification : verification = null;
    
    let videojuegos = useVideojuegos();

    console.log(videojuegos);

    return (
        <View style={{
            backgroundColor: "#5C5C55", //Gris oscuro
            height: "100%"
        }}>
            <NavBar Verificate={verification} />
            <View style={{
                padding: 15,
                margin: 15, 
                backgroundColor: "#D9D9D9",
                marginBottom: "100%"
            }}>
                <Text style={{ position: "relative", fontWeight: "bold", fontSize: 24 }}>Videojuegos</Text>
                <ScrollView horizontal={true} style={{
                    flexDirection: 'row'
                }}>
                    {videogames.map((videogame, index) => {
                        return <Product key={index} videoGame={videogame} />;
                    })}
                </ScrollView>
            </View>
        </View>
    )
}