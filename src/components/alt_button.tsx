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
            <Image source={require('../../assets/google_black.png')} style={styles.image} />
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default AltButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.input_background,
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
        color: Colors.main_text,
        fontSize: 16
    },

    image: {
        height: 25,
        width: 25,
        marginRight: 10,
    }
})