import React, { useState } from 'react';
import {
    Modal,
    ModalProps,
    Text,
    View
} from 'react-native';
import { FakeCurrencyInput } from "react-native-currency-input";
import { Theme } from '../../../../themes/color';
import AddButton from '../../addButton';
import ButtonPage from '../../ButtonPages';
import Input from '../../input';
import { styles } from './styles';


const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
        stateUpdater()
    }, 3500)
}

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
    const [cost, setCost] = useState('');
    const [getDate, setGetDate] = useState(new Date());
    const [error, setError] = useState('');

    function handleSubmit() {
        if (receveid.length < 1) 
            return updateError('Preencha o campo "Valor recebido"', setError)
        if (amount.length < 1) 
            return updateError('Preencha o campo "Valor total de venda"', setError)
        if (cost.length <= 1) 
            return updateError('Preencha o campo "Custo da venda"', setError)
        if (
            !productLine.trim() &&
            !product.trim() &&
            !saleId.trim() &&
            !quantity.trim() &&
            !receveid &&
            !amount.trim() &&
            !cost.trim() &&
            !getDate
        )
            return onClosed();
        onSubmit(
            productLine,
            product,
            saleId,
            quantity,
            receveid,
            amount,
            cost,
            getDate
        )
        setProductLine('');
        setProduct('');
        setSaleId('');
        setQuantity('');
        setReceveid('');
        setAmount('');
        setCost('');
        setGetDate(getDate);
        onClosed();
    }

    const handleChangeText = (text, valueFor) => {
        if (valueFor === 'productLine') setProductLine(text)
        if (valueFor === 'product') setProduct(text)
        if (valueFor === 'saleId') setSaleId(text)
        if (valueFor === 'quantity') setQuantity(text)
        if (valueFor === 'receveid') setReceveid(text)
        if (valueFor === 'amount') setAmount(text)
        if (valueFor === 'cost') setCost(text)
    }

    const CloseModal = () => {
        setProductLine('');
        setProduct('');
        setSaleId('');
        setQuantity('');
        setReceveid('');
        setAmount('');
        setCost('');
        setGetDate(getDate);
        onClosed();
    }

    return (
        <Modal visible={visible} animationType='fade'>
            <View style={styles.container}>
                <View style={styles.ButtonClose}>
                    <AddButton
                        iconName='close'
                        size={30}
                        color={Theme.color.black}
                        onPress={CloseModal}
                    />
                </View>
                <View style={styles.inputsView}>
                <Text style={styles.textHeaderInputs}>Linha vendida</Text>
                    <Input
                        placeholder='#EX: Automotivos/Revisões'
                        value={productLine}
                        onChangeText={text => handleChangeText(text, 'productLine')}
                        name='segment'
                        color='black'
                        size={20}
                    />
                    <Text style={styles.textHeaderInputs}>Produto vendido</Text>
                    <Input
                        value={product}
                        placeholder='#EX: Kit revisão BMW 320i'
                        onChangeText={text => handleChangeText(text, 'product')}
                        name='tag'
                        color='black'
                        size={20}
                    />
                    <Text style={styles.textHeaderInputs}>ID da venda</Text>
                    <Input
                        value={saleId}
                        placeholder='#EX: 456655454'
                        onChangeText={text => handleChangeText(text, 'saleId')}
                        keyboardType='numbers-and-punctuation'
                        name='eye'
                        color='black'
                        size={20}
                    />
                    <Text style={styles.textHeaderInputs}>Quantidade vendida</Text>
                    <Input
                        value={quantity}
                        placeholder='#EX: 3'
                        maxLength={5}
                        keyboardType='numeric'
                        onChangeText={text => handleChangeText(text, 'quantity')}
                        name='buffer'
                        color='black'
                        size={20}
                    />
                    <Text style={styles.textHeaderInputs}>Recebido da venda</Text>
                    <FakeCurrencyInput
                        style={styles.inputText}
                        precision={2}
                        separator=','
                        delimiter=''
                        value={receveid}
                        onChangeValue={text => handleChangeText(text, 'receveid')}
                    />
                    <Text style={styles.textHeaderInputs}>Valor total da venda</Text>
                    <FakeCurrencyInput
                        style={styles.inputText}
                        precision={2}
                        separator=','
                        delimiter=''
                        value={amount}
                        onChangeValue={text => handleChangeText(text, 'amount')}
                    />
                    <Text style={styles.textHeaderInputs}>Custo da venda</Text>
                    <FakeCurrencyInput
                        style={styles.inputText}
                        precision={2}
                        separator=','
                        delimiter=''
                        value={cost}
                        onChangeValue={text => handleChangeText(text, 'cost')}
                    />
                </View>
                <Text style={{fontSize: 15, textAlign: 'center', marginTop: 10, color: 'red'}}>{error}</Text>
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
