import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native"

export default function Profile(){
    const navigation = useNavigation();
    return (
        <View
        style={{paddingTop:30}}>
            <Text>Prerfil</Text>
            <Button title="Volver" onPress={() => navigation.navigate("main", {verification:true})}/>
        </View>
    )
}