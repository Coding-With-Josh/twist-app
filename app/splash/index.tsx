import { DarkTheme, LightTheme, GlassTheme } from "@/themes";
import { ThemeProvider } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getAuth, UserCredential } from "firebase/auth";

const Splash = () => {
  const autoRedirect = () => {
    const auth = getAuth();
    const user = UserCredential.user;
    if (user) {
      router.replace("/home");
    } else {
      router.replace("/choosetheme");
    }
  };

  return (
    <ThemeProvider>
      <SafeAreaView style={lightStyles.safearea}>
        <Text style={lightStyles.text}>Twist</Text>
        <TouchableOpacity style={lightStyles.btn} onPress={autoRedirect}>
          <Text style={lightStyles.btnText}>&gt;</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const darkStyles = StyleSheet.create({
  safearea: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
    backgroundColor: DarkTheme.colors.background,
  },
  text: {
    color: DarkTheme.colors.text,
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10,
    fontFamily: "monospace",
  },
  btn: {
    backgroundColor: DarkTheme.colors.primary,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontFamily: "monospace",
  },
});

const lightStyles = StyleSheet.create({
  safearea: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
    backgroundColor: LightTheme.colors.background,
  },
  text: {
    color: LightTheme.colors.text,
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10,
    fontFamily: "monospace",
  },
  btn: {
    backgroundColor: LightTheme.colors.primary,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontFamily: "monospace",
  },
});

const glassStyles = StyleSheet.create({
  safearea: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
    backgroundColor: GlassTheme.colors.background,
  },
  text: {
    color: GlassTheme.colors.text,
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10,
    fontFamily: "monospace",
  },
  btn: {
    backgroundColor: GlassTheme.colors.primary,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontFamily: "monospace",
  },
});

export default Splash;
