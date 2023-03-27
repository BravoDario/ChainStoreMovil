import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Product = ({videoGame}) => {
    const navigation = useNavigation();
    return (
        <View style={{
            padding: 10
        }}>
            <View style={{ 
            backgroundColor: "#FFF",
            padding: 10,
            height: 220,
            width: 130,}}>
                <Image source={{ uri: videoGame.fotos[0].foto }}
                    style={{ width: 100, height: 120}} />
                <Text>{videoGame.product.name}</Text>
                <Text>$ {videoGame.product.pricePage}</Text>
                <Button color={"#512828"} title="Ver" onPress={() => navigation.navigate("productDetails", {videogame:videoGame})} />
            </View>
        </View>
    )
}

export default Product;