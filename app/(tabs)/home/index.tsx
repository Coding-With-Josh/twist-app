import { auth } from "../../../Firebase";
import { DarkTheme, LightTheme, GlassTheme } from "@/themes";
import { getAuth, signOut } from "firebase/auth";
import { ThemeProvider } from "@react-navigation/native";
import { router } from "expo-router";
import { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View,
    Image
} from "react-native";

const Home = () => {
    const [theme, setTheme] = useState(DarkTheme);
    const [isError, setIsError] = useState(false);
    const [isLoading, ssetIsLoading] = useState(false);

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            router.replace('/login')
        }).catch((error) => {
            // An error happened.
        });
    }
const avatarVisible = () =>  {
            if (!auth.currentUser?.photoURL) {
                return (
                    <View style={{borderRadius: 100, width: 30, height: 30}}>
                        <Image source={{uri: 'https://i.pravatar.cc/300'}} style={{width: 30, height: 30, borderRadius: 100}} />
                    </View>
                )
            }else{
                return (
                    <View style={{borderRadius: 100, width: 30, height: 30}}>
                        <Image source={{uri: auth.currentUser?.photoURL}} style={{width: 30, height: 30, borderRadius: 100}} />
                    </View>
                )
            }
}

return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
        backgroundColor: DarkTheme.colors.background
    }}
            <View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: 100, gap: 20, alignItems: 'center'}}>
                    <TouchableOpacity>
                        <View>
                            {avatarVisible()}
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={{color: DarkTheme.colors.text, fontSize: 20, marginVertical: 10}}>Hi, Joshua{/*auth.currentUser?.displayName*/}</Text>
                    </View>
                </View>
            </View>
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