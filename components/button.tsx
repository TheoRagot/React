import { cloneElement } from "react";
import React = require("react");
import { Pressable, View, StyleSheet,ActivityIndicator, Text } from "react-native";

export default function MButton({onPress, type = "default", text, loading, icon, style}) {
    
    const getInner = () => {
        if (loading) {
            return <ActivityIndicator size="small"/>
        } else {
            return (
                <View style={styles.buttonContent}>
                    {icon && cloneElement(icon, {color: type === "default" ? "#333333" : "#ffffff"})}
                    <Text style={[styles.text, {color: type === "default" ? "#333333" : "#ffffff"}]}>{text}</Text>
                </View>
            )
        }
    }

    return (
        <Pressable style={[styles.main, type === 'default' ? styles.default : styles.dark, style]}>
            {getInner()}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 8
    },
    default: {
        backgroundColor: "#F2C94C"
    },
    dark: {
        backgroundColor: "#333333"
    },
    text: {
        fontWeight: "bold"
    },
    buttonContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 24
    },
    icon: {
        marginRight: 8
    }
})