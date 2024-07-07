import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FeatherIcon from "@expo/vector-icons/Feather";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { router } from "expo-router";
import { DarkTheme } from "@/themes";

export default function Example() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <View style={styles.headerBack}>
              <FeatherIcon color="#1D2A32" name="chevron-left" size={30} />
            </View>

            <Text style={styles.title}>Let's Get Started!</Text>

            <Text style={styles.subtitle}>
              Fill in the fields below to get started with your new account.
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>First Name</Text>

              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(text) => setFirstName(text)}
                placeholder="John Doe"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={firstName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Last Name</Text>

              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(text) => setLastName(text)}
                placeholder="Doe"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={lastName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email Address</Text>

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

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Confirm Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(text) => setConfirmPassword(text)}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={confirmPassword}
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  const auth = getAuth();
                  auth;
                  createUserWithEmailAndPassword(auth, email, password)
                    .then(() => {
                      router.replace("/home");
                    })
                    .catch((error) => {
                      alert("Unable to sign up. Try again");
                    });
                }}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Get Started</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>

        <TouchableOpacity
          onPress={() => {
            router.replace("/login");
          }}
          style={{ marginTop: "auto" }}
        >
          <Text style={styles.formFooter}>
            Already have an account?{" "}
            <Text
              style={{
                textDecorationLine: "underline",
                color: DarkTheme.colors.primary,
              }}
            >
              Sign in
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: "700",
    color: "#1D2A32",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
  },
  /** Header */
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  headerBack: {
    padding: 8,
    paddingTop: 0,
    position: "relative",
    marginLeft: -16,
    marginBottom: 6,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "400",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    borderWidth: 1,
    borderColor: "#C9D3DB",
    borderStyle: "solid",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: DarkTheme.colors.primary,
    borderColor: DarkTheme.colors.primary,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});
