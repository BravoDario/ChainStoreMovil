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
    console.log(route.params);

    const validarCompra = () => {
        if (verification === true) {
        navigation.navigate("payMethod",{verification: route.params.verification })
        } else {
        navigation.navigate("login")
        }
    }
    const validarwish = () => {
        if (verification === true) {
        navigation.navigate("wish",{verification: route.params.verification })
        } else {
        navigation.navigate("login")
        }
    }
    const validarCarrito = () => {
        if (verification === true) {
        navigation.navigate("adLittleCar",{verification: route.params.verification })
        } else {
        navigation.navigate("login")
        }
    }
    return (
        <View>
            <NavBar Verificate={verification} />
            <ScrollView>
                <Text>
                    Producto a detalle
                </Text>
                <Image source={{ uri: 'https://cdn.gameplanet.com/wp-content/uploads/2023/03/23195011/013388934027-resident-evil-4-remake-ps5-2.jpg' }}
                    style={{ width: 300, height: 350 }} />
                <Text>{videogame.product.name}</Text>
                <Text style = {{paddingTop:10}}>Precio:</Text>
                <Text>$ {videogame.product.pricePage}</Text>
                <Text style = {{paddingTop:10}}>Condición:</Text>
                <Text>{videogame.product.condition}</Text>
                <Text style = {{paddingTop:10}}>Plataforma:</Text>
                <Text>{videogame.product.platform}</Text>
                <Text style = {{paddingTop:10}}>Garantía:</Text>
                <Text>{videogame.product.garanty}</Text>
                <Text style = {{paddingTop:10}}>Descripción:</Text>
                <Text>{videogame.product.description}</Text>
                <Text style = {{paddingTop:10}}>Publicador:</Text>
                <Text>{videogame.product.publiquer}</Text>
                <Text style = {{paddingTop:10}}>Año:</Text>
                <Text>{videogame.product.year}</Text>
                <Text style = {{paddingTop:10}}>Clasificación:</Text>
                <Text>{videogame.clasification}</Text>
                <Text style = {{paddingTop:10}}>Género:</Text>
                <Text>{videogame.gender}</Text>
                <Button title="Agregar al carrito de compras" onPress={validarCarrito}></Button>
                <Button title="Agregar a favoritos" onPress={validarwish}></Button>
                <Button title="Comprar ahora" onPress={validarCompra}></Button>
                <Button title="Volver" onPress={() => navigation.navigate("main",{verification: route.params.verification }) } />
                {/*
                    const ver = () => {
                        if (Verificate === true) {
                        navigation.navigate("payMethod")
                    } else {
                        navigation.navigate("login")
                    }
                }
                 */
                }
            </ScrollView>
        </View>
    )
}

export default ProductDetails;