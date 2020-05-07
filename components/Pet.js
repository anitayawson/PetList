import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import {EvilIcons} from '@expo/vector-icons'

export default function Pet({name, type, age, location, image}) {
    return (
        <View style={styles.container}>
            <View style={styles.imagecardContainer}>
                <Image source={image} style={styles.image}/>
                <View style={styles.infoCard}>
                    <Text style={styles.petName}>{name}</Text>
                    <Text style={styles.petInfo}>{type}</Text>
                    <Text style={styles.petInfo}>{age}</Text>
                    <Text style={styles.petInfo}><EvilIcons name="location" size={20}/>{location}</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 25,
    },
    imagecardContainer: {
        flexDirection: "row",
        marginTop: 5,
    },
    infoCard: {
        backgroundColor: "white",
        padding: 20,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        marginBottom: 30,
        marginTop: 10,
    },
    petName: {
        color: "#253499",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 5
    },
    petInfo: {
        color: "#929396",
        fontSize: 15,
        marginTop: 5
    },
    image: {
        height: 170,
        width: 165,
        borderRadius: 15,
        marginBottom: 10
    }
})
