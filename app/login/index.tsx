import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { DarkTheme, LightTheme, GlassTheme, DefaultTheme } from "@/themes";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { router } from "expo-router";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    const errorMessage = () => {
      return Alert.alert("Unable to signin");
    };
    // const { email, password } = router.query;

    const auth = getAuth();
    auth;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.replace("/home");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        errorMessage();
        // ..
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome back!</Text>

            <Text style={styles.subtitle}>Sign in to your account</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email address</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={email}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(text) => setPassword(text)}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={password}
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity onPress={handleSignIn}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{ marginTop: 100 }}
            onPress={() => {
              router.replace("/signup");
            }}
          >
            <Text style={styles.formFooter}>
              Don't have an account?{" "}
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: DarkTheme.colors.primary,
                }}
              >
                Sign up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "space-between",
    paddingTop: 70,
    // alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginTop: 40,
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  /** Form */
  form: {
    marginBottom: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    textAlign: "center",
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: DarkTheme.colors.primary,
    borderColor: DarkTheme.colors.primary,
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
  },
});

export default SignInScreen;
