import React, { FC } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet, View } from 'react-native'
import Colors from './colors'

const { height, width } = Dimensions.get('screen');

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const Input: FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry || false} onChangeText={props.onChangeText} />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: Colors.input_background,
        borderRadius: 5,
        marginVertical: 10
    },
    input: {
        padding: 15,
        color: Colors.main_text,
    },

})