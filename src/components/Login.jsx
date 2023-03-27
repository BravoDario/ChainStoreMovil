import React from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Client from "../data/Client";
import NavBar from "./NavBar";

export default function Login({route}) {
    const navigation = useNavigation();
    let verification;
    route.params ? verification = route.params.verification : verification = null;
    const [user, setUser] = useState();
    const [pass, setPass] = useState();
    const [comp, setComp] = useState();
    const cliente = Client;

    const login = () => {

        if (user === cliente.userName && pass === cliente.password) {
            navigation.navigate("main", {verification:true});
        } else {
            setComp("Invalid");
        }
    }



    return (
        <View>
            <NavBar Verificate={verification} />
        <View
            style={{
                paddingTop:30
            }}>
            <Button title="<-" onPress={() => navigation.navigate("main", {verification:false})}/>
            <Text>
                Login
            </Text><Text>Username:</Text>
            <TextInput
                placeholder="Username"
                onChange={(value) => setUser(value.nativeEvent.text)}
                value={user}
            />
            <Text>Password:</Text>
            <TextInput
                placeholder="password"
                secureTextEntry={true}
                onChange={(value) => setPass(value.nativeEvent.text)}
                value={pass}
            />
            <Button title="Login" onPress={login} > Texto</Button>
            <Text>{comp}</Text>
        </View>
        </View>
    )
}