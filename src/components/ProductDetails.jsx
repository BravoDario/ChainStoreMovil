import { useNavigation } from "@react-navigation/native";
import React from "react"
import { Button } from "react-native";
import { View, Text, Image, ScrollView } from "react-native";
import NavBar from "./NavBar";

const ProductDetails = ({ route }) => {
    const navigation = useNavigation();
<<<<<<< HEAD
    let videogame;
    route.params ? videogame = route.params.videogame : verification = null;
=======
    let verification;
    route.params ? verification = route.params.verification : verification = null;
    console.log(route.params);
>>>>>>> fd4ebda21e398ea625b57e5ef95995d0e9bd76f7

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
<<<<<<< HEAD
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
=======
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
>>>>>>> fd4ebda21e398ea625b57e5ef95995d0e9bd76f7
            </ScrollView>
        </View>
    )
}

export default ProductDetails;