import React from 'react';
import {
    Dimensions,
    Modal,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Theme } from '../../../../themes/color';

const width = Dimensions.get('window').width -100

const SearchBar = ({ visible, value, onChangeText, onClear, onPress }) => {
    return (
        <Modal
            transparent
            visible={visible}
        >
            <View style={styles.container}>
                <TextInput
                    style={{fontSize: 16, color: Theme.color.white}}
                    selectionColor={Theme.color.white}
                    placeholderTextColor={Theme.color.white}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder='Buscar...'
                />
                <TouchableOpacity style={styles.clear}>
                    {value ?
                        <Icon
                            name='close'
                            size={20}
                            color={Theme.color.white}
                            onPress={onClear}
                            style={styles.clear}
                        /> :
                        <Icon
                            name='back'
                            size={30}
                            color={Theme.color.white}
                            onPress={onPress}
                            style={styles.clear}
                        />
                    }
                </TouchableOpacity>
            </View>
        </Modal>

    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        backgroundColor: Theme.color.box,
        marginLeft: 10,
    },
    clear: {
        marginTop: 3,
        marginRight: 6,
    },
    searchBar: {
        backgroundColor: Theme.color.Grey,
        height: 40,
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 18,
        marginLeft: 15,
        marginTop: 20,
        opacity: 0.7,
    },
});
