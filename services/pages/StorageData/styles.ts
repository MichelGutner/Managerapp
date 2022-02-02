import { Theme } from '../../../themes/color';
import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.background,
        paddingBottom: 0,
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        paddingLeft: 10,
        paddingTop: 30,
        backgroundColor: Theme.color.box
    },
    Buttons: {
        backgroundColor: Theme.color.box,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 20,
    },
    trashIcon:{
        position: 'absolute', 
        alignSelf: 'flex-end', 
        top: 700, 
        right: 20, 
        backgroundColor: 'white' 
    }
})