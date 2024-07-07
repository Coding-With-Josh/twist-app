import { Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { router } from "expo-router";

const handleSignIn = ({ email, password }: { email: any; password: any }) => {
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

export default handleSignIn