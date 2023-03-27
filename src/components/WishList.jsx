import React from "react";
import { View, Text, Button} from "react-native";
import Product from "./Product";
import { useNavigation } from "@react-navigation/native";
import NavBar from "./NavBar";

const WishList = ({ route }) => {
    const navigation = useNavigation();
    let verification;
    route.params ? verification = route.params.verification : verification = null;
    console.log(route.params);

    return (
        
        <View style={{
            flexDirection: 'column'
        }}>
            <NavBar Verificate={verification} />
            <Text>
                <h1>Lista de deseos</h1>
            </Text>
            <Product />
            <Button title="Agregar al carrito de compras" onPress={() => navigation.navigate("adLittleCar")}></Button>
            <Product />
            <Button title="Agregar al carrito de compras" onPress={() => navigation.navigate("adLittleCar")}></Button>

            <View style={{
                flexDirection: 'column',
                padding: 10
            }}>
                <Button title="volver" onPress={() => navigation.navigate("productDetails")} />
            </View>
        </View>
        
        
    )
}

export default WishList;