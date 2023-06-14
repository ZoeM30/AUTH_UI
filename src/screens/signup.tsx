import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Alert, Pressable } from 'react-native'
import { Input, Button, AltButton, Colors, HorizontalDivider } from '../components';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type SignUpScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'SignUp'>;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {

    const [email, setEmail] = useState<string | null>(null);
    const [Password, setPassword] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
            {/* const signup=async (params:type) =>  */}
            {/* <Button title="Sign Up" onPress={signup} /> */}

            <Button title="Sign Up" onPress={() => Alert.alert('pressed')} />

            <View style={styles.loginLink}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ textDecorationLine: 'underline' }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <HorizontalDivider />
            <AltButton title="Continue with Google" onPress={() => alert(`Pressed`)} />
        </View>
    )
}

export default SignUpScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    loginLink: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
    separator: {
        fontSize: 14,
        color: Colors.placeholder
    }
})