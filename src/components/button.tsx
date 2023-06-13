import React, { FC } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Colors from './colors';


const { height, width } = Dimensions.get('screen');

interface Props {
    title: string;
    onPress: () => void;

}

const Button: FC<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.button_background,
        alignItems: 'center',
        width: width / 1.1,
        height: height / 15,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 18,
        borderRadius: 5,
        marginVertical: 10
    },

    text: {
        color: Colors.button_text,
        fontSize: 16,
    }
})