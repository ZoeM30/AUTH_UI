import React, {useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type ForgotPasswordScreenProps = {
    navigation:StackNavigationProp<RootStackParamList, 'Forgot'>;
};

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({navigation}) =>{
    const [email, setEmail] = useState<string | null>(null);


    return (
        <View style={styles.container}>
            <Text>Forgot Password?</Text>
            <Text>Don't worry, enter your email and we'll send you a verification code.</Text>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />


            <Button title="Send" onPress={() => alert(`Pressed`)} />
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ textDecorationLine: 'underline' }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ textDecorationLine: 'underline' }}>
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
    }
})