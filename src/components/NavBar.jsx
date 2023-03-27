import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";

const NavBar = ({ Verificate }) => {
    const navigation = useNavigation();

    const ver = () => {
        if (Verificate === true) {
            navigation.navigate("profile")
        } else {
            navigation.navigate("login")
        }
    }

    return (
        <View style={{
            flexDirection: 'row',
<<<<<<< HEAD
            height: "7%",
            marginTop: 30,
=======
            height: 40,
            marginTop: 10,
>>>>>>> fd4ebda21e398ea625b57e5ef95995d0e9bd76f7
            backgroundColor: "#EB2300"
        }}> 
            <View style={{ margin: 3, flex: 0.3 }} >
                <Button title="Chain Store" color="#EB2300" onPress={() => navigation.navigate("main")}/>
            </View>
            <View style={{ backgroundColor: "white", margin: 5, flex: 0.7 }} >
                <TextInput placeholder="Buscar" />
            </View>
            <View style={{ margin: 3, flex: 0.3 }} >
                <Button title="Profile" color="#EB2300" onPress={ver} />
            </View>
        </View>
    )
}

export default NavBar;