import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Theme } from '../../../themes/color';
import InputModal from '../../components/Modals/Input';
import Items from '../../components/Modals/inputItems';
import SearchBar from '../../components/Modals/modalSearchBar';
import { useData } from '../../contexts/DataProvider';
import { styles } from './styles';

const MercadoLivrePage = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [searchModalOpen, setSearchModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { dataBase, setDataBase, findData } = useData();

    const formatDate = ms => {
        const date = new Date(ms)
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`
    }

    const handleOnSubmit = async (
        productLine: string,
        product: string,
        saleId: string,
        quantity: number,
        receveid: any,
        amount: any,
        expenses: any,
        cost: any,
        totalGain: any,
        porcent: any,
        getDate: any
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
            getDate: Date.now(),
            time: Date.now()
        }
        const updateData = [...dataBase, data]
        setDataBase(updateData)
        await AsyncStorageLib.setItem('data', JSON.stringify(updateData))
    };

    console.log(dataBase.map((c) => c.getDate))

    const handleOnSearch = async (text) => {
        setSearchQuery(text);
        if (!text.trim()) {
            setSearchQuery('');
            return await findData();
        }
        const filterData = dataBase.filter(data => {
            if (data.product.toLowerCase().includes(text.toLowerCase())) {
                return data;

            } else if (data.saleId.toLowerCase().includes(text.toLowerCase())) {
                return data;

            } else if (data.productLine.toLowerCase().includes(text.toLowerCase())) {
                return data;
            }
        })
        if (filterData.length) {
            setDataBase([...filterData])
        } else {

        }
    }

    const handleClear = async () => {
        setSearchModalOpen(false)
        await findData();
        setSearchQuery('');
    }

    const renderItem = ({ item }) => <Items item={item} />

    return (
        <View style={styles.container}>
            <View style={styles.headerIcons}>
                <Icon
                    onPress={() => navigation.navigate('Home')}
                    name={'arrowleft'}
                    size={30}
                    color={Theme.color.white}
                />
                <Icon
                    onPress={() => setModalVisible(true)}
                    name={'plus'}
                    size={30}
                    color={Theme.color.white}
                    style={{ marginLeft: 136 }}
                />
                <Icon
                    onPress={() => setSearchModalOpen(true)}
                    name={'search1'}
                    size={30}
                    color={Theme.color.white}
                    style={{ marginRight: 20 }}
                />
            </View>
            <FlatList
                data={dataBase}
                numColumns={1}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
            <InputModal
                visible={modalVisible}
                onClosed={() => setModalVisible(false)}
                onSubmit={handleOnSubmit}
            />
            <SearchBar
                enabled={true}
                onPress={() => setSearchModalOpen(false)}
                onChangeText={handleOnSearch}
                onClear={handleClear}
                value={searchQuery}
                visible={searchModalOpen}
            />
        </View>

    );
};

export default MercadoLivrePage;
