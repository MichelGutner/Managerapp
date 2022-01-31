import { Theme } from './../../../themes/color';
import { Dimensions, StyleSheet } from "react-native";



const width = Dimensions.get('window').width - 40

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.background
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
        alignItems: 'center',
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
        marginTop: 10,
        fontSize: 17,
        color: Theme.color.white
    },
    profit: {
        flex: 0,
        backgroundColor: Theme.color.box,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonAddMeta: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        top: 60,
        right: 40,
    },
    profitText: {
        fontSize: 25,
        color: Theme.color.activity,
    },
    profitText2: {
        fontSize: 25,
        color: Theme.color.errorMessage,
        marginTop: 10,
    }
})