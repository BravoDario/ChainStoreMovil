import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateAccount = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Crear Cuenta</Text>
            <Text>
                name
                firstLastName
                secondLastName
                age
                userName
                password
                street
                neighborhood
                country
            </Text>
            <Button title="volver" onPress={() => navigation.navigate('main')} />
        </View>
    )
}

export default CreateAccount;