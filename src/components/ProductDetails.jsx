import { useNavigation } from "@react-navigation/native";
import React from "react"
import { Button } from "react-native";
import { View, Text, Image, ScrollView } from "react-native";
import videogame from "../data/data"
import NavBar from "./NavBar";

const ProductDetails = ({ route }) => {
    const navigation = useNavigation();
    let verification;
    route.params ? verification = route.params.verification : verification = null;

    return (
        <View>
            <NavBar Verificate={verification} />
            <ScrollView>
                <Text>
                    Producto a detalle
                </Text>
                <Image source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_644830-MLA50222950634_062022-O.webp' }}
                    style={{ width: 300, height: 300 }} />
                <Text>{videogame.product.name}</Text>
                <Text>$ {videogame.product.pricePage}</Text>
                <Text>{videogame.product.condition}</Text>
                <Text>{videogame.product.platform}</Text>
                <Text>{videogame.product.garanty}</Text>
                <Text>{videogame.product.description}</Text>
                <Text>{videogame.product.publiquer}</Text>
                <Text>{videogame.product.year}</Text>
                <Text>{videogame.clasification}</Text>
                <Text>{videogame.gender}</Text>
                <Button title="Agregar al carrito de compras"></Button>
                <Button title="Agregar a favoritos"></Button>
                <Button title="Comprar ahora"></Button>
                <Button title="volver" onPress={() => navigation.navigate("main")} />
                {/*
                    desarrollado
                    trailer
                 */
                }
            </ScrollView>
        </View>
    )
}

export default ProductDetails;