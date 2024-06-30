import { auth } from "@/Firebase";
import { DarkTheme, GlassTheme, LightTheme } from "@/themes";
import { ThemeProvider, useNavigation } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

const LoginScreen = () => {
  const [theme, setTheme] = useState(LightTheme);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, seIsError] = useState(false);

  const Loading = () => {
    <ActivityIndicator size="large" color={DarkTheme.colors.primary} />;
  };

  const Error = () => {
    alert("Error");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.replace("/home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed In
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        <Error />;
      });
  };

  return (
    <ThemeProvider value={theme}>
      {theme ? (
        <SafeAreaView
          style={[
            darkStyles.safearea,
            { width: "90%", justifyContent: "center", alignItems: "center" },
          ]}
        >
          <View style={darkStyles.container}>
            <View style={darkStyles.header}>
              <View style={darkStyles.imgView}>
                <Image
                  source={require("../../assets/icons/slack.png")}
                  style={darkStyles.headerImg}
                  alt="Logo"
                  resizeMode="cover"
                />
              </View>
              <Text style={darkStyles.title}>Sign in to Twist</Text>
              <Text style={darkStyles.subtitle}>
                Get access to your dashboards and more...
              </Text>
            </View>
            <View style={darkStyles.form}>
              <View style={darkStyles.input}>
                <Text style={darkStyles.inputLabel}>Email Address</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  style={darkStyles.inputControl}
                  placeholder="john@example.com"
                  placeholderTextColor="#746b80"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>

              <View style={darkStyles.input}>
                <Text style={darkStyles.inputLabel}>Password</Text>
                <TextInput
                  style={darkStyles.inputControl}
                  placeholder="********"
                  secureTextEntry
                  placeholderTextColor="#746b80"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>

              <View style={darkStyles.formAction}>
                <TouchableOpacity onPress={handleSignIn}>
                  <View style={darkStyles.btn}>
                    <Text style={lightStyles.btnText}>Sign In</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={lightStyles.safearea}>
          <View style={lightStyles.container}>
            <View style={lightStyles.header}>
              <View style={lightStyles.imgView}>
                <Image
                  source={require("../../assets/icons/slack.png")}
                  style={lightStyles.headerImg}
                  alt="Logo"
                  resizeMode="cover"
                />
              </View>
              <Text style={lightStyles.title}>Sign in to Twist</Text>
              <Text style={lightStyles.subtitle}>
                Get access to your dashboards and more...
              </Text>
            </View>
            <View style={lightStyles.form}>
              <View style={lightStyles.input}>
                <Text style={lightStyles.inputLabel}>Email Address</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  style={lightStyles.inputControl}
                  placeholder="john@example.com"
                  placeholderTextColor="#746b80"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>

              <View style={lightStyles.input}>
                <Text style={lightStyles.inputLabel}>Password</Text>
                <TextInput
                  style={lightStyles.inputControl}
                  placeholder="********"
                  placeholderTextColor="#746b80"
                  secureTextEntry
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>

              <View style={lightStyles.formAction}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("yguvjbfuv ");
                  }}
                >
                  <View style={lightStyles.btn}>
                    <Link href="../(tabs)/home" style={lightStyles.btnText}>
                      Sign In
                    </Link>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      )}
    </ThemeProvider>
  );
};

const darkStyles = StyleSheet.create({
  safearea: {
    fontFamily: "monospace",
    flex: 1,
    backgroundColor: DarkTheme.colors.background,
  },
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginBottom: 36,
    marginTop: 40,
  },
  imgView: {
    backgroundColor: DarkTheme.colors.card,
    flex: 1,
    width: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    alignSelf: "center",
  },
  headerImg: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    fontFamily: "monospace",
    marginTop: 36,
    marginBottom: 6,
    textAlign: "center",
    color: DarkTheme.colors.text,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "monospace",
    color: DarkTheme.colors.text,
    textAlign: "center",
  },
  input: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 17,
    fontFamily: "monospace",
    fontWeight: "600",
    color: DarkTheme.colors.text,
  },
  inputControl: {
    height: 44,
    backgroundColor: DarkTheme.colors.background,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 5,
    fontSize: 15,
    fontWeight: 500,
    color: DarkTheme.colors.text,
  },
  form: {
    marginBottom: 30,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  btn: {
    backgroundColor: DarkTheme.colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: DarkTheme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 600,
    color: "white",
    fontFamily: "monospace",
  },
});
const lightStyles = StyleSheet.create({
  safearea: {
    fontFamily: "monospace",
    flex: 1,
    backgroundColor: LightTheme.colors.background,
  },
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginBottom: 36,
    marginTop: 80,
  },
  imgView: {
    backgroundColor: "white",
    flex: 1,
    width: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    alignSelf: "center",
  },
  headerImg: {
    width: 80,
    height: 80,
    padding: 20,
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    fontFamily: "monospace",
    marginTop: 36,
    marginBottom: 6,
    color: LightTheme.colors.text,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 500,
    color: LightTheme.colors.text,
    textAlign: "center",
  },
  input: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 17,

    fontWeight: "600",
    color: LightTheme.colors.text,
  },
  inputControl: {
    backgroundColor: LightTheme.colors.card,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 8,
    fontSize: 15,
    fontWeight: 500,
    color: LightTheme.colors.text,
  },
  form: {
    marginBottom: 30,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  btn: {
    backgroundColor: DarkTheme.colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: DarkTheme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontFamily: "monospace",
    fontWeight: 600,
    color: "white",
  },
});
const glassStyles = StyleSheet.create({
  safearea: {
    fontFamily: "monospace",
    flex: 1,
    backgroundColor: GlassTheme.colors.background,
  },
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginBottom: 36,
    marginTop: 80,
  },
  imgView: {
    backgroundColor: GlassTheme.colors.card,
    flex: 1,
    width: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    alignSelf: "center",
  },
  headerImg: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    fontFamily: "monospace",
    marginTop: 36,
    marginBottom: 6,
    color: GlassTheme.colors.text,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "monospace",
    color: GlassTheme.colors.text,
    textAlign: "center",
  },
  input: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "monospace",
    color: GlassTheme.colors.text,
  },
  inputControl: {
    backgroundColor: GlassTheme.colors.card,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 5,
    fontSize: 15,
    fontWeight: 500,
    color: GlassTheme.colors.text,
  },
  form: {
    marginBottom: 30,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  btn: {
    backgroundColor: DarkTheme.colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: DarkTheme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontFamily: "monospace",
    fontWeight: 600,
    color: "white",
  },
});

export default LoginScreen;
