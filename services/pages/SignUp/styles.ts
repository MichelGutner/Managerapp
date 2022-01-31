import { Theme } from './../../../themes/color';
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Theme.color.background
    },
    inputs:{
        position: 'absolute',
        top: 120,
        left: 50,
    },
    button: {
        marginTop: 40,
        position: 'absolute',
        top: 190,
        right: -25,
    },
    inputText: {
        color: Theme.color.black,
        opacity: 0.8,
    },
    errorMessage: {
        marginTop: 5,
        color: Theme.color.errorMessage,
        marginLeft: 60,
    },
    headerIcon: {
        position: 'absolute',
        top: 40,
        left: 20
    }
})