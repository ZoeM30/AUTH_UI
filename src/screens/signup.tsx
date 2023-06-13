import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from '../components';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


const App: FunctionComponent = (props) => {
    const [email, setEmail] = useState<string | null>(null);
    const [Password, setPassword] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Button title="Sign Up" onPress={() => alert(`Pressed`)} />
            <View style={styles.loginLink}>
                <TouchableOpacity onPress={() => props.navigation.navigate('login')}>
                    <Text style={{ textDecorationLine: 'underline' }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default App;
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
    }
})