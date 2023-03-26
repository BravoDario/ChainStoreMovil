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
            height: 200,
            width: 130,}}>
                <Image source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_644830-MLA50222950634_062022-O.webp' }}
                    style={{backgroundColor: "green", width: 100, height: 100}} />
                <Text>{videoGame.product.name}</Text>
                <Text>$ {videoGame.product.pricePage}</Text>
                <Button title="Ver" onPress={() => navigation.navigate("productDetails", {verification:true})} />
            </View>
        </View>
    )
}

export default Product;