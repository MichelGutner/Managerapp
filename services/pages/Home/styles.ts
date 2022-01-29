import { Theme } from './../../../themes/color';
import { Dimensions, StyleSheet } from "react-native";



const width = Dimensions.get('window').width - 40

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxOne: {
        width: width,
        height: 250,
        backgroundColor: Theme.color.box,
        borderRadius: 20,
        margin: 20,
        marginTop: 90
    },
    circleDashboard: {
        marginTop: 20,
        marginLeft: 10,
    },
    fatMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft: 20,
    },
    textFat: {
        fontSize: 14,
    },
    textMeta: {
        fontSize: 14,
    },
    headerButtons: {
        
    },
    headerNames: {
        fontSize: 10,
        color: Theme.color.white,
    }
})