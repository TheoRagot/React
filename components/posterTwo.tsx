import React = require("react");
import { Image, Text, View, StyleSheet, useColorScheme } from "react-native";
import {CColors} from "../constants/Colors";

export default function PosterTwo({picture, title, note, style}) {
    const colorScheme = useColorScheme();
    const Colors = CColors[colorScheme]

    return (
        <View style={style}>
            <Image style={styles.picture} source={{uri: `https://image.tmdb.org/t/p/w185/${picture}`}}/>
            <View style={styles.container}>
                <Text style={[styles.title, {color: Colors.textColor}]}>{title}</Text>

                <Text style={{color: Colors.textColor}}>{note.toFixed(1)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        position: "relative"
    },
    picture: {
        width: 120,
        height: 160,
        borderRadius: 8
    },
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 4,
        paddingBottom: 2
    },
    title: {
        fontSize: 12
    }
})