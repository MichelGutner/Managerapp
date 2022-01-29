import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Theme } from '../../../themes/color';


type Props = TouchableOpacityProps & {
    title: string;
}

const width = Dimensions.get('window').width -40

const ButtonMarkets = ({title, ...rest}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5}{...rest} >
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Icon name="right" size={18}/>
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
        borderColor: '#DBDCE8',
        marginLeft: 20,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    title:{
        fontSize: 15,
        color: Theme.color.white
    },
});
