import { Alert } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { router } from "expo-router";

const handleSignUp = ({ email, password }: { email: string; password: string }) => {
  const errorMessage = () => {
    return Alert.alert("Unable to signup");
  };
  // const { email, password } = router.query;

  const auth = getAuth();
  auth;
  createUserWithEmailAndPassword(auth, email, password)
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

export default handleSignUp;