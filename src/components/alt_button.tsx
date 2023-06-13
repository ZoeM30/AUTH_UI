import React, { FC } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';
import Colors from './colors';


const { height, width } = Dimensions.get('screen');

interface Props {
    title: string;
    onPress: () => void;

}

const AltButton: FC<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default AltButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.input_background,
        alignItems: 'center',
        width: width / 1.1,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 18,
        borderRadius: 5,
        marginVertical: 10
    },

    text: {
        color: Colors.main_text,
    }
})