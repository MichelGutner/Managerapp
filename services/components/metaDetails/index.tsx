import AsyncStorageLib from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useData } from '../../contexts/DataProvider';
import ButtonPage from '../ButtonPages';
import InputMeta from '../inputMeta';

const MetaDetails = props => {
    const [metas, setMetas] = useState(props.route.params.meta)
    const [showModal, setShowModal] = useState(false);
    const { setMeta } = useData();
    const [isEdit, setIsEdit] = useState(false);

    const handleClose = () => setShowModal(false);

    const handleUpdateSubmit = async (meta) => {
        const dataMeta = await AsyncStorageLib.getItem('meta');
        let dataMetas = [];
        if (dataMeta !== null) dataMetas = JSON.parse(dataMeta)

        const newMeta = dataMetas.filter(x => {
            if (x.id === metas.id) {
                x.metas = meta;
                x.isUpdated = true;
                setMetas(x)
            }
            return x;
        });
        setMeta(newMeta);
        await AsyncStorageLib.setItem('meta', JSON.stringify(newMeta));
        props.navigation.goBack();
    }

    const openEditModal = () => {
        setIsEdit(true);
        setShowModal(true);
    };

    return (
        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
        <View>
            <Text>{metas.metas}</Text>
        </View>
        <ButtonPage title='Atualizar' onPress={() => openEditModal()}/>            
            <InputMeta
                visible={showModal}
                onCloseMeta={handleClose}
                onSubmitMeta={handleUpdateSubmit}
                isEdit={isEdit}
                meta={metas}
            />
        </View>
    );
};

export default MetaDetails;

const styles = StyleSheet.create({});
