import React, { useState } from 'react';
import {
    Modal, ModalProps,
    StyleSheet, Text, View
} from 'react-native';
import { Theme } from '../../../../themes/color';
import AddButton from '../../addButton';
import ButtonPage from '../../ButtonPages';
import Input from '../../input';
import TextInputModalMask from '../../TextInputMaskModal';


type Props = ModalProps & {
    visible: boolean
    onClosed: Function;
    onSubmit: Function;
}

const InputModal = ({ visible, onClosed, onSubmit }: Props) => {
    const [productLine, setProductLine] = useState('');
    const [product, setProduct] = useState('');
    const [saleId, setSaleId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [receveid, setReceveid] = useState('');
    const [amount, setAmount] = useState('');
    const [expenses, setExpenses] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = () => {
        if (
            !productLine.trim() &&
            !product.trim() &&
            !saleId.trim() &&
            !quantity.trim() &&
            !receveid.trim() &&
            !amount.trim() &&
            !expenses.trim() &&
            !cost.trim())
            return onClosed();
        onSubmit(
            productLine,
            product,
            saleId,
            quantity,
            receveid,
            amount,
            expenses,
            cost
        )
        setProductLine('');
        setProduct('');
        setSaleId('');
        setQuantity('');
        setReceveid('');
        setAmount('');
        setExpenses('');
        setCost('');
        onClosed();
    }

    const handleChangeText = (text, valueFor) => {
        if (valueFor === 'productLine') setProductLine(text)
        if (valueFor === 'product') setProduct(text)
        if (valueFor === 'saleId') setSaleId(text)
        if (valueFor === 'quantity') setQuantity(text)
        if (valueFor === 'receveid') setReceveid(text)
        if (valueFor === 'amount') setAmount(text)
        if (valueFor === 'expenses') setExpenses(text)
        if (valueFor === 'cost') setCost(text)
    }

    const CloseModal = () => {
        setProductLine('');
        setProduct('');
        setSaleId('');
        setQuantity('');
        setReceveid('');
        setAmount('');
        setExpenses('');
        setCost('');
        onClosed();
    }

    return (
        <Modal visible={visible} animationType='fade'>
            <View style={styles.container}>
                <View style={styles.ButtonClose}>
                    <AddButton
                        iconName='close'
                        size={30}
                        color={Theme.color.white}
                        onPress={CloseModal}
                    />
                </View>
                <View style={styles.inputsView}>
                    <Input
                        placeholder='#Linha do produto'
                        style={{ opacity: 0.3, color: Theme.color.white }}
                        value={productLine}
                        onChangeText={text => handleChangeText(text, 'productLine')}
                        name='segment'
                        color='white'
                        size={20}
                    />
                    <Input
                        value={product}
                        placeholder='#Nome produto'
                        style={{ opacity: 0.3, color: Theme.color.white }}
                        onChangeText={text => handleChangeText(text, 'product')}
                        name='tag'
                        color='white'
                        size={20}
                    />
                    <Input
                        value={saleId}
                        placeholder='#ID da venda'
                        style={{ opacity: 0.3, color: Theme.color.white }}
                        onChangeText={text => handleChangeText(text, 'saleId')}
                        keyboardType='numbers-and-punctuation'
                        name='eye'
                        color='white'
                        size={20}
                    />
                    <Input
                        value={quantity}
                        placeholder='#Quantidade'
                        maxLength={5}
                        keyboardType='numeric'
                        style={{ opacity: 0.3, color: Theme.color.white }}
                        onChangeText={text => handleChangeText(text, 'quantity')}
                        name='buffer'
                        color='white'
                        size={20}
                    />
                    <TextInputModalMask
                        type={'money'}
                        options={{
                            precision: 2,
                            separator: '.',
                            delimiter: '.',
                            unit: '',
                            suffixUnit: ''

                        }}
                        value={receveid}
                        placeholder='#Valor recebido'
                        style={{ opacity: 0.3, color: Theme.color.white }}
                        onChangeText={text => handleChangeText(text, 'receveid')}
                        name='cash-plus'
                        color='white'
                        size={20}
                    />
                    <TextInputModalMask
                        type={'money'}
                        options={{
                            precision: 2,
                            separator: '.',
                            delimiter: '.',
                            unit: '',
                            suffixUnit: ''

                        }}
                        value={amount}
                        placeholder='#Valor total da venda'
                        style={{ opacity: 0.3, color: Theme.color.white }}
                        onChangeText={text => handleChangeText(text, 'amount')}
                        name='cash-multiple'
                        color='white'
                        size={20}
                    />
                    <TextInputModalMask
                        type={'money'}
                        options={{
                            precision: 2,
                            separator: '.',
                            delimiter: '.',
                            unit: '',
                            suffixUnit: ''

                        }}
                        value={expenses}
                        placeholder='#Gastos com a venda'
                        style={{ opacity: 0.3, color: Theme.color.white }}
                        onChangeText={text => handleChangeText(text, 'expenses')}
                        name='cash-minus'
                        color='white'
                        size={20}
                    />
                    <TextInputModalMask
                        type={'money'}
                        options={{
                            precision: 2,
                            separator: '.',
                            delimiter: '.',
                            unit: '',
                            suffixUnit: ''

                        }}
                        value={cost}
                        placeholder='#Custo da venda'
                        style={{ opacity: 0.3, color: Theme.color.white }}
                        onChangeText={text => handleChangeText(text, 'cost')}
                        name='cash-minus'
                        color='white'
                        size={20}
                    />
                </View>
                <ButtonPage 
                    title='Cadastrar' 
                    StylesContainer={styles.buttonConfirm}
                    onPress={handleSubmit}
                />
            </View>
        </Modal>

    );
};

export default InputModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.background
    },
    inputsView: {
        justifyContent: 'center',
        marginLeft: 40,
    },
    buttonConfirm:{
        marginTop: 20,
    },
    ButtonClose:{
        marginTop: 10,
        marginLeft: 10,
    }
});