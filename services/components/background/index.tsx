import React, {ReactNode} from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";


type Props ={
    children: ReactNode;
}

export function Background({ children }: Props){


    return(
        <View style={styles.container}>
        {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})