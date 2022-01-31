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
import DatePicker from "react-native-date-picker";
import Icon from 'react-native-vector-icons/AntDesign';


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
    const [getDate, setGetDate] = useState(new Date());

    const handleSubmit = () => {
        if (
            !productLine.trim() &&
            !product.trim() &&
            !saleId.trim() &&
            !quantity.trim() &&
            !receveid &&
            !amount.trim() &&
            !expenses.trim() &&
            !cost.trim() &&
            !getDate)
            return onClosed();
        onSubmit(
            productLine,
            product,
            saleId,
            quantity,
            receveid,
            amount,
            expenses,
            cost,
            getDate
        )
        setProductLine('');
        setProduct('');
        setSaleId('');
        setQuantity('');
        setReceveid('');
        setAmount('');
        setExpenses('');
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
                    <Input
                        placeholder='#Linha do produto'
                        style={{ opacity: 0.3, color: Theme.color.black }}
                        value={productLine}
                        onChangeText={text => handleChangeText(text, 'productLine')}
                        name='segment'
                        color='black'
                        size={20}
                    />
                    <Input
                        value={product}
                        placeholder='#Nome produto'
                        style={{ opacity: 0.3, color: Theme.color.black }}
                        onChangeText={text => handleChangeText(text, 'product')}
                        name='tag'
                        color='black'
                        size={20}
                    />
                    <Input
                        value={saleId}
                        placeholder='#ID da venda'
                        style={{ opacity: 0.3, color: Theme.color.black }}
                        onChangeText={text => handleChangeText(text, 'saleId')}
                        keyboardType='numbers-and-punctuation'
                        name='eye'
                        color='black'
                        size={20}
                    />
                    <Input
                        value={quantity}
                        placeholder='#Quantidade'
                        maxLength={5}
                        keyboardType='numeric'
                        style={{ opacity: 0.3, color: Theme.color.black }}
                        onChangeText={text => handleChangeText(text, 'quantity')}
                        name='buffer'
                        color='black'
                        size={20}
                    />
                    <Text style={styles.textHeaderInputs}>Recebido</Text>
                    <FakeCurrencyInput
                        style={styles.inputText}
                        precision={2}
                        separator=','
                        delimiter=''
                        value={receveid}
                        onChangeValue={text => handleChangeText(text, 'receveid')}
                    />
                    <Text style={styles.textHeaderInputs}>Total Venda</Text>
                    <FakeCurrencyInput
                        style={styles.inputText}
                        precision={2}
                        separator=','
                        delimiter=''
                        value={amount}
                        onChangeValue={text => handleChangeText(text, 'amount')}
                    />
                    <Text style={styles.textHeaderInputs}>Gastos</Text>
                    <FakeCurrencyInput
                        style={styles.inputText}
                        precision={2}
                        separator=','
                        delimiter=''
                        value={expenses}
                        onChangeValue={text => handleChangeText(text, 'expenses')}
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
