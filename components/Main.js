import React from 'react';
import { View, FlatList, StyleSheet, TextInput, Text} from 'react-native';
import {Feather} from '@expo/vector-icons'
import Pet from './Pet'

export default function Main() {
    const pets = [
        { name: "Snow", type: "Dog", age: "2 years old", location: "93 Park Lane", id: "1", image: require("../assets/dog1.jpg") },
        { name: "Jigga", type: "Dog", age: "3 years old", location: "51 Park Lane", id: "2", image: require("../assets/dog2.jpg") },
        { name: "Xyla", type: "Cat", age: "1 year old", location: "40 Park Lane", id: "3", image: require("../assets/cat1.jpg") },
    ]
    return (
        <View>
            <View>
                <TextInput style={styles.textInput} placeholder="Search here" placeholderTextColor="#a6a6a6"></TextInput><Feather name="search" size={18} style={styles.searchIcon} />
            </View>
            <FlatList
                data={pets}
                renderItem={({ item }) => {
                    return <Pet name={item.name} type={item.type} age={item.age} location={item.location} image={item.image} />
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    textInput: {
        marginTop: 30,
        marginBottom: 15,
        backgroundColor: "white",
        height: 45,
        borderRadius: 15,
        paddingLeft: 40,
        marginHorizontal: 25
    },

    searchIcon: {
        position: "absolute",
        left: 37,
        top: 43
    },
})
