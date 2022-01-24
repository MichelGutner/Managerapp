import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import {} from 'react'
import React from 'react';
import { Theme } from '../../../themes/color';


type Props = TouchableOpacityProps & {
    title: string;
    backgroundColor: any,
}

const width = Dimensions.get('window').width -40

const ButtonPage = ({title, backgroundColor, ...rest}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5}{...rest} >
        <View style={[styles.container, backgroundColor]}>
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
        color: Theme.color.white
    },
});
