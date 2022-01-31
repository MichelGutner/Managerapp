import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Theme } from '../../../themes/color';


type Props = TouchableOpacityProps & {
    title: string;
    StylesContainer: any,
}

const width = Dimensions.get('window').width -40

const ButtonPage = ({title, StylesContainer, ...rest}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5}{...rest} >
        <View style={[styles.container, StylesContainer]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default ButtonPage;

const styles = StyleSheet.create({
    container:{
        width: width,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 25,
        color: Theme.color.black
    },
});
