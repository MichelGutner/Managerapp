import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../../../../themes/color';

type Props = {
    item: any;
}


const Items = ({ item }: Props) => {
    const
        {
            productLine,
            product,
            saleId,
            quantity,
            receveid,
            amount,
            porcent,
            totalGain,
            getDate
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
                    <Text>ID: {saleId}</Text>
                    <Text>Un: {quantity}</Text>
                </View>
                <View style={styles.bodyValues}>
                    <Text>Recebido R$: {receveid}</Text>
                    <Text>Total R$: {amount}</Text>
                    {porcent < 22 ? 
                        (<Text>Porcentagem: {porcent}%</Text>) 
                        : 
                        <Text style={{color: Theme.color.errorMessage}}>Porcentagem: {porcent}%</Text>}

                    {totalGain > 0 ?
                     (<Text>Total Ganho R$: {totalGain}</Text>) 
                     : 
                     <Text style={{color: Theme.color.errorMessage}}>Total Ganho R$: {totalGain}</Text>
                    } 
                    <Text style={styles.date}>{formatDate(getDate)}</Text>
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
        paddingHorizontal: 3,
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
