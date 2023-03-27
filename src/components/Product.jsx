import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Data from "../data/data"

const Product = () => {

    const navigation = useNavigation();
    const videoGame = Data;

    return (
        <View style={{
            padding: 10
        }}>
            <View style={{ backgroundColor: "gray",
            padding: 10,
            height: 250,
            width: 130,}}>
                <Image source={{ uri: 'https://cdn.gameplanet.com/wp-content/uploads/2023/03/23195011/013388934027-resident-evil-4-remake-ps5-2.jpg' }}
                    style={{backgroundColor: "green", width: 100, height: 150}} />
                <Text>{videoGame.product.name}</Text>
                <Text>$ {videoGame.product.pricePage}</Text>
                <Button title="Ver" onPress={() => navigation.navigate("productDetails", {verification:true})} />
            </View>
        </View>
    )
}

export default Product;

