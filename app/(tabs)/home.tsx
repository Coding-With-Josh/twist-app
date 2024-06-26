import { auth } from "@/Firebase";
import { DarkTheme, LightTheme, GlassTheme } from "@/themes";
import { getAuth, signOut } from "firebase/auth";
import { ThemeProvider } from "@react-navigation/native";
import { router } from "expo-router";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import {
    SafeAreaView,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View,
    Image
} from "react-native";
import Greeting from "@/components/Greetin";

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
            } else {
                return (
                    <View style={{borderRadius: 100, width: 30, height: 30}}>
                        <Image source={{uri: auth.currentUser?.photoURL}} style={{width: 30, height: 30, borderRadius: 100}} />
                    </View>
                )
            }
}

const isNameDefined = () => {
    if (!auth.currentUser?.displayName) {
        return (
            <Text style={{color: DarkTheme.colors.text, fontSize: 20, fontWeight: 'bold'}}>User</Text>
        )
    } else {
        return (
            <Text style={{color: DarkTheme.colors.text, fontSize: 20, fontWeight: 'bold'}}>{auth.currentUser?.displayName}</Text>
        )
    }
}

const greeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        return (
            <Text style={{color: DarkTheme.colors.text, fontSize: 20, fontWeight: 'bold'}}>Good Morning, </Text>
        )
    } else if (currentHour < 18) {
        return (
            <Text style={{color: DarkTheme.colors.text, fontSize: 20, fontWeight: 'bold'}}>Good Afternoon, </Text>
        )
    } else {
        return (
            <Text style={{color: DarkTheme.colors.text, fontSize: 20, fontWeight: 'bold'}}>Good Evening, </Text>
        )
    }
  };

return (
        <SafeAreaView style={{flex: 1, padding: 20, backgroundColor: DarkTheme.colors.background
    }}>
            <View>
            {/* Header */}
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                    <TouchableOpacity>
                        <Feather name="menu" size={24} color={DarkTheme.colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="notifications" size={24} color={DarkTheme.colors.text} />
                    </TouchableOpacity>
                </View>
            {/* Greeting */}
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        {greeting()} {isNameDefined()}
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