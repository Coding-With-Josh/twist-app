import { DarkTheme, LightTheme, GlassTheme } from "@/themes";
import { ThemeProvider } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";

const Home = () => {
    // const themeState = () => {
    //     const [theme, setTheme] = useState(LightTheme)
    // }
    return (
        <SafeAreaView>
            <Text style={darkStyles.text}>Home</Text>
            <TouchableOpacity onPress={() => {}}>
                <Text style={glassStyles.text}>Theme Toggler</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const darkStyles = StyleSheet.create ({
    text: {
        color: DarkTheme.colors.text,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})

const lightStyles = StyleSheet.create ({
    text: {
        color: LightTheme.colors.text,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})

const glassStyles = StyleSheet.create ({
    text: {
        color: GlassTheme.colors.text,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})

export default Home