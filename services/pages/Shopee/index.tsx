import AsyncStorageLib from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { FlatList, Modal, ModalProps, View } from 'react-native';
import AddButton from '../../components/addButton';
import InputModal from '../../components/Modals/Input';
import Items from '../../components/Modals/inputItems';
import { useData } from '../../contexts/DataProvider';
import { styles } from './styles';

type Props = ModalProps & {
    visible: boolean;
    onClose: any;
    navigation: any
}

const ShopeePage = ({ visible, onClose, navigation, ...rest }: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { dataBase, setDataBase } = useData();

    const handleOnSubmit = async (
        productLine: string,
        product: string,
        saleId: string,
        quantity: number,
        receveid: number,
        amount: number,
        expenses: number,
        cost: number,
        totalGain: number,
        porcent: number
    ) => {
        const data = {
            id: Date.now(),
            productLine,
            product,
            saleId,
            quantity,
            receveid,
            amount,
            expenses,
            cost,
            porcent: (100 - (receveid * 100 / amount)).toFixed(2),
            totalGain: (receveid - cost - expenses).toFixed(2),
            time: Date.now()
        }
        const updateData = [...dataBase, data]
        setDataBase(updateData)
        await AsyncStorageLib.setItem('data', JSON.stringify(updateData))
    };


    const CloseModal = () => {
        onClose();
    }

    /**  const openDelete = dataBase => {
           navigation.navigate('Welcome', {dataBase})
       }*/

    const renderItem = ({ item }) => <Items item={item} />

    return (
        <Modal
            {...rest}
            visible={visible}
            animationType='fade'
        >
            <View style={styles.container}>
                <View style={styles.headerIcons}>
                    <AddButton
                        onPress={CloseModal}
                        iconName={'arrowleft'}
                        size={35}
                        stylesContainer={undefined}
                    />
                    <AddButton
                        onPress={() => setModalVisible(true)}
                        iconName={'plus'}
                        size={35}
                        stylesContainer={undefined}
                    />
                </View>
                <View>
                    <FlatList
                        data={dataBase}
                        numColumns={1}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem} />
                </View>
            </View>
            <InputModal visible={modalVisible} onClosed={() => setModalVisible(false)} onSubmit={handleOnSubmit} />
        </Modal>
    );
};

export default ShopeePage;
