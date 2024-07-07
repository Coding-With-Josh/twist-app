import chooseTheme from "@/app/choosetheme";
import { DarkTheme, LightTheme } from "@/themes";
import { getAuth } from "@firebase/auth";
import { Image, Text } from "react-native";

const auth = getAuth();

const isPhotoUrlSet = () => {
  if (auth.currentUser?.photoURL) {
    return (
      <Image
        source={{ uri: auth.currentUser?.photoURL }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
    );
  } else {
    return (
      <Image
        source={{ uri: "https://i.pravatar.cc/300" }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
    );
  }
};

const isFirstNameSet = () => {
  if (auth.currentUser?.displayName) {
    return (
      <Text
        style={{
          color:
            chooseTheme() === DarkTheme
              ? DarkTheme.colors.text
              : LightTheme.colors.text,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {auth.currentUser?.displayName}
      </Text>
    );
  } else {
    return (
      <Text
        style={{
          color: DarkTheme.colors.text,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        User
      </Text>
    );
  }
};
