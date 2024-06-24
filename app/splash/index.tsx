import { DarkTheme, LightTheme, GlassTheme } from "@/themes";
import { ThemeProvider } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Splash = () => {
    const [theme, setTheme] = useState(LightTheme)
    return (
        <ThemeProvider value={theme}>
            {(theme) ? (
                <SafeAreaView style={darkStyles.safearea}>
                    <Text style={darkStyles.text}>Twist</Text>
                    <TouchableOpacity style={darkStyles.btn}>
                        <Link href='../login' style={darkStyles.btnText}>&gt;</Link>
                    </TouchableOpacity>
                </SafeAreaView>
            ) : (
                <SafeAreaView style={lightStyles.safearea}>
                    <Text style={lightStyles.text}>Twist</Text>
                    <TouchableOpacity style={lightStyles.btn}>
                        <Link href='../login' style={lightStyles.btnText}>&gt;</Link>
                    </TouchableOpacity>
                </SafeAreaView>
            )}
        </ThemeProvider>
    )
}

const darkStyles = StyleSheet.create({
    safearea: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 15,
        backgroundColor: DarkTheme.colors.background,
    },
    text: {
        color: DarkTheme.colors.text,
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 10,
        fontFamily: 'monospace'
    },
    btn: {
        backgroundColor: DarkTheme.colors.primary,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 5
    },
    btnText: {
        color: 'white',
        fontFamily: 'monospace',
    }
})

const lightStyles = StyleSheet.create({
    safearea: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 15,
        backgroundColor: LightTheme.colors.background,
    },
    text: {
        color: LightTheme.colors.text,
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 10,
        fontFamily: 'monospace'
    },
    btn: {
        backgroundColor: LightTheme.colors.primary,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 5
    },
    btnText: {
        color: 'white',
        fontFamily: 'monospace',
    }
})

const glassStyles = StyleSheet.create({
    safearea: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 15,
        backgroundColor: GlassTheme.colors.background,
    },
    text: {
        color: GlassTheme.colors.text,
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 10,
        fontFamily: 'monospace',
    },
    btn: {
        backgroundColor: GlassTheme.colors.primary,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 5
    },
    btnText: {
        color: 'white',
        fontFamily: 'monospace',
    }
})

export default Splash