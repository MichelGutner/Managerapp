import { View, Text, Modal, ActivityIndicator, ModalProps } from 'react-native';
import React from 'react';
import { Theme } from '../../../../themes/color';

type Props = ModalProps & {
    visible: boolean;
}

const LoadingSpinner = ({visible}: Props) => {
  return (
    <Modal visible={visible}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator 
                size={'large'}
                animating
                color={Theme.color.activity}
                />
        </View>
    </Modal>
  );
};

export default LoadingSpinner;
