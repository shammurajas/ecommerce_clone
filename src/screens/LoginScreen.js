import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'



const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
            <View>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={require('/Users/shunmugaraja/Downloads/react-basic/Clones/ecommerce_amazon/assets/amazon-logo-editorial-vector-illustration-market-136495269.webp')
                    }
                />
            </View>

            <KeyboardAvoidingView>
                <View>
                    <Text style={styles.loginText}>
                        Login In to your Account
                    </Text>
                </View>

                <View style={{ marginTop: 70 }}>
                    <View style={styles.inputboxstyle}>

                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={styles.textinput}
                            placeholder='enter your Email' />
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <View style={styles.inputboxstyle}>

                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={styles.textinput} placeholder='enter your Password' />
                    </View>
                </View>

                <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text>keep me logged in</Text>
                    <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forgot Password</Text>
                </View>

                <View style={{ marginTop: 50 }} />

                <Pressable style={{ width: 200, backgroundColor: '#FEBE10', borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }}>Login</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 15 }}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                        Don't have an account? Sign Up
                    </Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginText: {
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 12,
        color: "#041E42",
        alignItems: 'center',
        marginLeft: 60
    },
    inputboxstyle: {
        flexDirection: "row",
        backgroundColor: "#D0D0D0",
        borderRadius: 5,
    },
    textinput: {
        color: "gray",
        alignItems: 'center',
        width: 300,
        height: 40,
        margin: 12,
        padding: 10,
    }
})
