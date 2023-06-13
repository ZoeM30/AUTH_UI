import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from './colors';
const { height, width } = Dimensions.get('screen');

const HorizontalDivider = () => {
    return (
        <View style={styles.container}>
            <View style={styles.divider} />
            <Text style={styles.text}>or</Text>
            <View style={styles.divider} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width / 1.1
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.placeholder,
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
        color: Colors.placeholder,
    },
});

export default HorizontalDivider;
