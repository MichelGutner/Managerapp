import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Theme } from '../../../themes/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FakeCurrencyInput, FakeCurrencyInputProps} from "react-native-currency-input";

type Props = FakeCurrencyInputProps & {
    name: string;
    size: number;
    color: string;
    value: string;
}


const TextInputModalMask = ({ name, size, color, value, ...rest }: Props) => {
    return (
        <View style={styles.container}>
            <FakeCurrencyInput
                value={value}
                style={{ color: Theme.color.white }}
                {...rest}
            />
            <Icon name={name} size={size} color={color} />
        </View>

    );
};

export default TextInputModalMask;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 250,
        height: 50,
        borderBottomWidth: 0.25,
        borderColor: Theme.color.white,
    }
});
