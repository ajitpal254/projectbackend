import { Input, Text } from 'react-native-elements'
import React, { useState } from 'react';
import { Button, View } from "react-native";
import { TouchableOpacity } from 'react-native';



const UserProifeScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [ContactNumber, setContactNumber] = useState('');
    const [Location, setLocation] = useState('');
    const [error, setError] = useState('');


    return (
        <View>
            <Input label="FirstName" value={FirstName} onChangeText={setFirstName}></Input>
            <Input label="LastName" value={LastName} onChangeText={setLastName}></Input>
            <Input label="ContactNumber" value={ContactNumber} onChangeText={setContactNumber}></Input>
            <Input label="Location" value={Location} onChangeText={setLocation}></Input>

            <Input label="Email" value={email} onChangeText={setEmail}></Input>


            <Button title="LogOut" onPress={() => LogOut()}></Button>
            {
                error ?
                    <Text style={{ color: 'red' }}>{error}</Text>
                    : null
            }
            <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>

            </TouchableOpacity>
        </View>
    )
};

export default UserProifeScreen;
