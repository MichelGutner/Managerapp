import { Theme } from './../../../themes/color';
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.color.background
    },
    button: {
        marginTop: 50
    },
    errorMessage:{
        color: Theme.color.errorMessage
    }
})