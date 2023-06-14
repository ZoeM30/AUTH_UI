import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import { Input, Button, Colors, VerificationInput } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

const { height, width } = Dimensions.get('screen');

type VerifyEmailScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Verify'>;
};

const VerifyEmailScreen: React.FC<VerifyEmailScreenProps> = ({ navigation }) => {
    const [code, setCode] = useState<string | null>(null);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Let's verify your email</Text>
            <Text style={styles.small_text}>Please enter the six digit code sent to your email.</Text>
            <View style={styles.verification_container}>
                <VerificationInput placeholder="1" onChangeCode={(code) => setCode(code)} />
                <VerificationInput placeholder="2" onChangeCode={(code) => setCode(code)} />
                <VerificationInput placeholder="3" onChangeCode={(code) => setCode(code)} />
                <VerificationInput placeholder="4" onChangeCode={(code) => setCode(code)} />
                <VerificationInput placeholder="5" onChangeCode={(code) => setCode(code)} />
                <VerificationInput placeholder="6" onChangeCode={(code) => setCode(code)} />
            </View>

            <Pressable onPress={() => navigation.navigate('Reset')}>
                <Button title="Verify" onPress={() => navigation.navigate('Reset')} />
            </Pressable>

            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link_text}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.link_text}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default VerifyEmailScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    link: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    link_text: {
        textDecorationLine: 'underline',
        color: Colors.main_text,
        fontSize: 14,
        marginHorizontal: width / 10,
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
    small_text: {
        marginBottom: 10,
        fontSize: 16,
    },
    verification_container: {
        flexDirection: 'row',

    }
})