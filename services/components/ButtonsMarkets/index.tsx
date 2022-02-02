import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Theme } from '../../../themes/color';


type Props = TouchableOpacityProps & {
    title: string;
}

const width = Dimensions.get('window').width -210

const ButtonMarkets = ({title, ...rest}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5}{...rest} >
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default ButtonMarkets;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: width,
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0.40,
        borderColor: Theme.color.box,
        marginLeft: 20,
        paddingHorizontal: 15,
        borderRadius: 10
    },
    title:{
        fontSize: 15,
        color: Theme.color.black
    },
});
