import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const chooseTheme = () => {
    return (
        <SafeAreaView style={styles.Fisrtview}>
            <Text style={styles.text}>Choose your preferred theme</Text>
            <View style={styles.view}>
                <View style={styles.stuff}>
                    <TouchableOpacity
                        style={styles.views}
                        onPress={() => router.push({ pathname: "../login" })}>
                        <Image
                            source={require('../../assets/images/home.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text2}>Plain</Text>
                </View>
                <View style={styles.stuff}>
                    <TouchableOpacity
                        style={styles.views}
                        onPress={() => router.push({ pathname: "../login" })}>
                        <Image
                            source={require('../../assets/images/home.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text2}>Glass</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Fisrtview: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 30
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'monospace'
    },
    text2: {
        color: 'white',
        fontSize: 20,
        opacity: 0.9,
        fontWeight: 'bold',
        fontFamily: 'monospace'
    },
    view: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 35
    },
    views: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'gray',
        height: 170,
        width: 160,
        borderRadius: 20,
    },
    stuff: {
        flex: 1,
        alignItems: 'center',
        cursor: 'pointer',
        gap: 15
    },
    image: {
        width: '100%',
        height: 170,
        borderRadius: 20,
    }
})

export default chooseTheme;