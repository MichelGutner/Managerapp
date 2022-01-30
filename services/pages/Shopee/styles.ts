import { Theme } from './../../../themes/color';
import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.background,
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    Buttons: {
        backgroundColor: Theme.color.box,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 20,
    }
})