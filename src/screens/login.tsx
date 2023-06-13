import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type LoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
  };
const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string | null>(null);
    const [Password, setPassword] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Button title="Sign Up" onPress={() => alert(`Pressed`)} />
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                    <Text style={{ textDecorationLine: 'underline' }}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ textDecorationLine: 'underline' }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    link: {
        flexDirection: 'row',
        marginVertical: 20,
    }
})