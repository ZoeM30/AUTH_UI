import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { Input, Button, Colors, AltButton, HorizontalDivider } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

const { height, width } = Dimensions.get('screen');

type LoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};
const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string | null>(null);
    const [Password, setPassword] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Button title="Login" onPress={() => alert(`Pressed`)} />
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                    <Text style={styles.link_text}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.link_text}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
            <HorizontalDivider />
            <AltButton title="Continue with Google" onPress={() => alert(`Pressed`)} />
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
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
    separator: {
        fontSize: 14,
        color: Colors.placeholder
    },
    link_text: {
        textDecorationLine: 'underline',
        color: Colors.main_text,
        fontSize: 14,
        marginHorizontal: width / 10,
    }
})