import { Alert } from "react-native";
import { getAuth, signOut } from "@firebase/auth";
import { router } from "expo-router";

const handleLogout = () => {
  const error = () => {
    return Alert.alert("Unable to logout");
  };

  const auth = getAuth();
  auth;
  signOut(auth)
    .then(() => {
      router.replace("/login");
    })
    .catch((error) => {
      error();
    });
};

export default handleLogout