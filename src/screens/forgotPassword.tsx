import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import { Input, Button, Colors } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

const { height, width } = Dimensions.get('screen');

type ForgotPasswordScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Forgot'>;
};

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string | null>(null);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.small_text}>Don't worry, enter your email and we'll send you a verification code.</Text>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />

            <Pressable onPress={() => navigation.navigate('Verify')}>
                <Button title="Send" onPress={() => navigation.navigate('Verify')} />
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

export default ForgotPasswordScreen;
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
    }
})