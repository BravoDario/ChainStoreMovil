import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View, Image } from "react-native";
import client from "../data/Client";
import NavBar from "./NavBar";


const Profile = ({route})=>{
    const navigation = useNavigation();
    let verification;
    route.params ? verification = route.params.verification : verification = null;
    return (
        <View>
            <NavBar Verificate={verification} />
        <View
        style={{paddingTop:30}}>
            
            <Text>Perfil</Text>
            <Image source={{ uri: 'https://cdmx.com/wp-content/uploads/2019/08/pedro-sola-65433.png' }}
                    style={{ width: 100, height: 100, alignItems:"center" }} />
            <Text style = {{paddingTop:10}}>Nombre:</Text>
            <Text>{client.name}</Text>
            <Text style = {{paddingTop:10}}>Primer Apellido:</Text>
            <Text>{client.firstLastName}</Text>
            <Text style = {{paddingTop:10}}>Edad:</Text>
            <Text>{client.age}</Text>
            <Text style = {{paddingTop:10}}>Género:</Text>
            <Text>{client.gender}</Text>
            <Text style = {{paddingTop:10}}>Número de celular:</Text>
            <Text>{client.mobilePhone}</Text>
            <Text style = {{paddingTop:10}}>Email:</Text>
            <Text>{client.email}</Text>
            <View>
                <Button title="Carrito de compras" onPress={() => navigation.navigate("adLittleCar", {verification:true})}></Button>
                <Button title="Lista de Deseos" onPress={() => navigation.navigate("wish", {verification:true})}></Button>
                <Button title="Historial" onPress={() => navigation.navigate("history", {verification:true})}></Button>
                <Button title="Volver" onPress={() => navigation.navigate("main", {verification:true})}/>
                <Button title="Cerrar sesión" onPress={() => navigation.navigate("main", {verification:false})}/>
            </View>
        </View>
        </View>
    )
}
export default Profile;