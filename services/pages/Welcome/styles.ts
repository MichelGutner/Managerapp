import { StyleSheet } from "react-native";
import { Theme } from "../../../themes/color";




export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.color.background,
    },
    image:{
        width: '100%',
        height: 460,
    },
    signIn:{
        marginTop: 30,
        backgroundColor: Theme.color.SignIn,
        borderRadius: 10,
    },
    signUp: {
        borderRadius: 10,
        borderWidth: 0.25,
        borderColor: Theme.color.black,
        marginTop: 20,
    }
})