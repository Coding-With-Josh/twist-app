import { DarkTheme, LightTheme, GlassTheme } from "@/themes";
import { ThemeProvider } from "@react-navigation/native";
import { useState } from "react";
import {
    SafeAreaView,
    ActivityIndicator,
    StyleSheet,
    Text, TouchableOpacity, View, useColorScheme
} from "react-native";

const Home = () => {
    // const themeState = () => {
    //     const [theme, setTheme] = useState(LightTheme)
    // }
    return (
        <SafeAreaView>
            <Text style={darkStyles.text}>HomeScreen</Text>
            <ActivityIndicator size='large' color={DarkTheme.colors.primary} />


        </SafeAreaView>
    )
}

const darkStyles = StyleSheet.create({
    text: {
        color: DarkTheme.colors.text,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})

const lightStyles = StyleSheet.create({
    text: {
        color: LightTheme.colors.text,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})

const glassStyles = StyleSheet.create({
    text: {
        color: GlassTheme.colors.text,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})

export default Home