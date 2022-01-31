import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { TextInputProps } from 'react-native';
import { Theme } from '../../../themes/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = TextInputProps & {
    name: string;
    size: number;
    color: string;
    value: string;
    stylesInput: any;
}


const Input = ({ name, size, color, value, stylesInput, ...rest }: Props) => {
    return (
        <View style={[styles.container, stylesInput]}>
            <TextInput
                value={value}
                placeholderTextColor={Theme.color.black}
                style={{ color: Theme.color.black }}
                {...rest}
            />
            <Icon name={name} size={size} color={color} />
        </View>

    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 250,
        height: 50,
        borderBottomWidth: 0.25,
        borderColor: Theme.color.black,
    }
});
