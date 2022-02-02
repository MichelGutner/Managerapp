import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Theme } from '../../../../themes/color';

type Props = TouchableOpacityProps & {
    item: any;
    selected: any;
}


const Items = ({ item, selected, ...rest }: Props) => {
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
        <TouchableOpacity activeOpacity={0.6} {...rest}>
            <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.bodyTexts}>
                    <Text>{productLine}</Text>
                    <Text style={styles.productName}>{product}</Text>
                    <Text>ID:#{saleId}</Text>
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
        {selected && (<View style={styles.overlay}/>)}
        </TouchableOpacity>
        
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
        overflow: 'hidden'
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
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        top: 0,
        left: 0,
    }
});
