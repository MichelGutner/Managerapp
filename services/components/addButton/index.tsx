import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = TouchableOpacityProps & {
    iconName: string;
    size: number;
    color: string;
    stylesContainer: any;
}

const AddButton = ({iconName, size, color, stylesContainer, ...rest}: Props) => {
  return (
    <TouchableOpacity {...rest}>
        <View style={[styles.container, stylesContainer]}>
            <Icon name={iconName} size={size} color={color}/>
        </View>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 40,
    }
});
