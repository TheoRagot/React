import React = require("react");
import { Image, Text, View, StyleSheet, useColorScheme } from "react-native";
import {CColors} from "../constants/Colors";

export default function PosterOne({picture, title, style}) {
    const colorScheme = useColorScheme();
    const Colors = CColors[colorScheme]

    return (
        <View style={style}>
            <Image style={styles.picture} source={{uri: `https://image.tmdb.org/t/p/w185/${picture}`}}/>
            <Text style={[styles.title, {color: Colors.textColor}]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    picture: {
        width: 120,
        height: 160,
        borderRadius: 8
    },
    title: {
        marginTop: 14
    }
})