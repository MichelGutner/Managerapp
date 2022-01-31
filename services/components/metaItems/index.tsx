import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Theme } from '../../../themes/color';

type Props = {
    item: any;
    onPress: any;
}

const MetaItems = ({item, onPress}: Props) => {
    const {metas} = item;
  return (
    <TouchableOpacity
      onPress={onPress}>
      <Text style={styles.text}>Meta: R$ {metas}</Text>
    </TouchableOpacity>
  );
};

export default MetaItems;

const styles = StyleSheet.create({
  container:{

  },
  text:{
    fontSize: 17,
    marginTop: 10,
    color: Theme.color.white
  }
})
