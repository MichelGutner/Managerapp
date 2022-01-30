import React, { useEffect, useState } from 'react';
import { Dimensions, Modal, ModalProps, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Theme } from '../../../themes/color';
import Icon from "react-native-vector-icons/AntDesign"
import {FakeCurrencyInput} from "react-native-currency-input";


type Props = ModalProps & {
    visible: boolean;
    onCloseMeta: Function;
    onSubmitMeta: Function;
    isEdit: boolean;
    meta: any;
}

const width = Dimensions.get('window').width - 180

const InputMeta = ({ visible, onCloseMeta, onSubmitMeta, isEdit, meta }: Props) => {
    const [metas, setMetas] = useState('');

    const handleSubmit = () => {
        if (!metas) return onCloseMeta();
        if (isEdit) {
            onSubmitMeta(metas)
        } else {
            onSubmitMeta(metas)
            setMetas('');
        }
        onCloseMeta();
    }

    const CloseModalMeta = () => {
        onCloseMeta();
    }

    const handleChangeTextMeta = (text, valueFor) => {
        if (valueFor === 'metas') setMetas(text)
    }

    useEffect(() => {
        if (isEdit) {
            setMetas(meta.metas)
        }
    }, [isEdit])
    return (
        <Modal
            transparent
            animationType='fade'
            visible={visible}
        >
            <View style={styles.container}>
                <FakeCurrencyInput
                    value={metas}
                    onChangeValue={text => handleChangeTextMeta(text, 'metas')}
                    style={styles.text}
                    keyboardType='numeric'
                    precision={2}
                    separator=','
                    delimiter=''

                 />
            </View>
            <View style={styles.viewButtons}>
                <TouchableOpacity
                    onPress={CloseModalMeta}
                    style={styles.ButtonCancel}
                >
                    <Text>Ola</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.buttonSave}
                >
                    <Icon name='sync' size={17} color={Theme.color.Blue} />
                </TouchableOpacity>
            </View>
        </Modal>

    );
};



export default InputMeta;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 80,
        backgroundColor: Theme.color.background,
        position: 'absolute',
        top: 210,
        left: 80,
        shadowColor: Theme.color.white,
        elevation: 20,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        width: 110,
        borderBottomWidth: 0.25,
        marginTop: 20,
    },
    ButtonChange: {
        width: 70,
        height: 40,
        backgroundColor: Theme.color.black,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonCancel: {
        width: 70,
        height: 40,
        borderRadius: 10,
        borderWidth: 0.2,
    },
    viewButtons: {
        flexDirection: 'row',
        position: 'absolute',
        top: 303,
        left: 120,
        zIndex: +1
    },
    buttonSave: {
        width: 70,
        height: 40,
        backgroundColor: Theme.color.black,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
