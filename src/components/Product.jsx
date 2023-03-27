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
<<<<<<< HEAD
            height: 220,
            width: 130,}}>
                <Image source={{ uri: videoGame.fotos[0].foto }}
                    style={{ width: 100, height: 120}} />
=======
            height: 250,
            width: 130,}}>
                <Image source={{ uri: 'https://cdn.gameplanet.com/wp-content/uploads/2023/03/23195011/013388934027-resident-evil-4-remake-ps5-2.jpg' }}
                    style={{backgroundColor: "green", width: 100, height: 150}} />
>>>>>>> fd4ebda21e398ea625b57e5ef95995d0e9bd76f7
                <Text>{videoGame.product.name}</Text>
                <Text>$ {videoGame.product.pricePage}</Text>
                <Button color={"#512828"} title="Ver" onPress={() => navigation.navigate("productDetails", {videogame:videoGame})} />
            </View>
        </View>
    )
}

export default Product;

