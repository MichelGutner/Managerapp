import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useData } from '../../contexts/DataProvider';

type Props = {
    item: any;
    onPress: any;
}

const MetaItems = ({item, onPress}: Props) => {
    const {metas} = item;
  return (
    <TouchableOpacity
      onPress={onPress}>
      <Text >Meta: R$ {metas}</Text>
    </TouchableOpacity>
  );
};

export default MetaItems;
