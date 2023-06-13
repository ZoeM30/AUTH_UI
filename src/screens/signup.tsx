import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from '../components';
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
            <Text>Sign up</Text>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
            
            <Button title="Sign Up" onPress={() => alert(`Pressed`)} />
            <View style={styles.loginLink}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ textDecorationLine: 'underline' }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
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
    }
})