import { useNavigation } from "@react-navigation/native";
import React from "react"
import { Button } from "react-native";
import { View, Text, Image, ScrollView } from "react-native";
import NavBar from "./NavBar";

const ProductDetails = ({ route }) => {
    const navigation = useNavigation();
    let videogame;
    route.params ? videogame = route.params.videogame : verification = null;

    return (
        <View>
            <NavBar Verificate={true} />
            {/*desarrollado trailer*/}
            <ScrollView style={{
                margin: 15,
                marginBottom:90,
                backgroundColor: "white"
            }}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Image source={{ uri: videogame.fotos[0].foto }}
                        style={{ width: 170, height: 200 }} />
                    <View style={{ margin: 5, width: 200, flexWrap: 'wrap' }} >
                        <Text style={{ fontWeight: "bold", fontSize: 27 }}>{videogame.product.name}</Text>
                        <Text style={{ fontSize: 20 }}>$ {videogame.product.pricePage + '\n' +
                            videogame.product.platform + '\n' +
                            videogame.product.year + '\n' +
                            videogame.clasification + '\n' +
                            videogame.product.publiquer + '\n' +
                            videogame.gender}</Text>
                    </View>
                </View>
                <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                    {videogame.fotos.map((foto, index) => { return <Image key={index} source={{ uri: foto.foto }} style={{ margin: 5, width: 100, height: 120 }} /> })}
                </ScrollView>
                <View>
                    <Text style={{ fontSize: 20 }}>{videogame.product.description}</Text>
                    <Text>{videogame.product.condition}</Text>
                    <Text>{videogame.product.garanty}</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Button title="Agregar al carrito"></Button>
                        <Button title="Comprar ahora"></Button>
                    </View>
                    <Button title="volver" onPress={() => navigation.navigate("main")} />
                </View>
            </ScrollView>
        </View>
    )
}

export default ProductDetails;