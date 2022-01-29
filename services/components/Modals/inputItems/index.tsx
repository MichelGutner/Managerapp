import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { Theme } from '../../../../themes/color';
import { useData } from '../../../contexts/DataProvider';

type Props = {
    item: any;
}


const Items = ({ item }: Props) => {
    const { dataBase, setDataBase } = useData();
    const
        {
            productLine,
            product,
            saleId,
            quantity,
            receveid,
            amount,
            expenses,
            cost,
            time,
            porcent,
            totalGain
        } = item;


    const formatDate = ms => {
        const date = new Date(ms)
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.bodyTexts}>
                    <Text>{productLine}</Text>
                    <Text style={styles.productName}>{product}</Text>
                    <Text>{saleId}</Text>
                    <Text>{quantity}</Text>
                </View>
                <View style={styles.bodyValues}>
                    <Text>Recebido R$: {receveid}</Text>
                    <Text>Total R$: {amount}</Text>
                    <Text>Porcentagem: {porcent}%</Text>
                    <Text>Total Ganho R$: {totalGain}</Text>
                    <Text style={styles.date}>{formatDate(time)}</Text>
                </View>
            </View>
        </View>
    );
};

export default Items;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 109,
        paddingHorizontal: 5,
        marginRight: 10,
        marginLeft: 10,
    },
    bodyTexts: {
        alignItems: 'flex-start',
        marginTop: 8,
    },
    bodyValues: {
        alignItems: 'flex-end',
        marginTop: 8,
    },
    date: {
        fontSize: 12
    },
    productName:{
        color: Theme.color.black,
        opacity: 0.7
    }
});
