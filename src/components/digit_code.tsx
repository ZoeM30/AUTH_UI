import React, { FC, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet, View } from 'react-native'
import Colors from './colors'

const { height, width } = Dimensions.get('screen');

interface Props {
    placeholder: string;
    onChangeCode: (code: string) => void;

}

const VerificationInput: FC<Props> = (props) => {
    // const [code, setCode] = useState(['', '', '', '', '', '']);
    // const handleInputChange = (text: string, index: number) => {
    //     const newCode = [...code];
    //     newCode[index] = text;
    //     setCode(newCode);
    //     props.onChangeCode(newCode.join(''));
    // };
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={props.placeholder} onChangeText={props.onChangeCode} keyboardType='numeric' maxLength={1} />
        </View>
    )
}

export default VerificationInput;

const styles = StyleSheet.create({
    container: {
        width: width / 10,
        alignSelf: 'center',
        backgroundColor: Colors.input_background,
        borderRadius: 5,
        margin: 10
    },
    input: {
        padding: 15,
        color: Colors.main_text,
    },

})