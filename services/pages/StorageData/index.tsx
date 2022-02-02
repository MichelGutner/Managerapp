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



const StorageDate = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [searchModalOpen, setSearchModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { dataBase, setDataBase, findData } = useData();
    const [selected, setSelected] = useState([]);


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

    const handleOnPress = (item) => {
        if (selected.length) {
            return handleLongPress(item)
        }
    }

    const handleLongPress = (item) => {
        if (selected.includes(item.id)) {
            const newList = selected.filter(productId => productId !== item.id)
            return setSelected(newList)
        }
        setSelected([...selected, item.id])
    }
    const getSelected = (item) => selected.includes(item.id)

    const deselectedItems = () => setSelected([])

    const deleteMultiples = () => {
        if (!selected.length) return;
        const newProducts = dataBase.filter((p) => !selected.includes(p.id));
        setDataBase(newProducts);
        deselectedItems();
    }

    const renderItem = ({ item }) =>
        <Items
            selected={getSelected(item)}
            onPress={() => handleOnPress(item)}
            onLongPress={() => handleLongPress(item)}
            item={item}
        />

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
            <SearchBar
                onPress={() => setSearchModalOpen(false)}
                onChangeText={handleOnSearch}
                onClear={handleClear}
                value={searchQuery}
                visible={searchModalOpen}
            />
            {selected.length ?
                <Icon
                    style={styles.trashIcon}
                    onPress={deleteMultiples}
                    name={'delete'}
                    size={30}
                    color={Theme.color.errorMessage}
                /> : null
            }
        </View>

    );
};

export default StorageDate;
