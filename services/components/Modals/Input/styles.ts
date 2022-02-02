import { StyleSheet } from 'react-native';
import { Theme } from '../../../../themes/color';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.background
    },
    inputsView: {
        justifyContent: 'center',
        marginLeft: 55,
    },
    buttonConfirm: {
        marginTop: 1,
        marginLeft: 10,
    },
    ButtonClose: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 10,
    },
    inputText: {
        width: 250,
        height: 35,
        borderBottomWidth: 0.25,
        borderColor: Theme.color.black,
    },
    textHeaderInputs: {
        marginTop: 3,
    }
});