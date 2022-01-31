import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonMarkets from '../../components/ButtonsMarkets';
import InputMeta from '../../components/inputMeta';
import MetaItems from '../../components/metaItems';
import { useData } from '../../contexts/DataProvider';
import { styles } from './styles';
import CircularProgress from "react-native-circular-progress-indicator";
import { Theme } from '../../../themes/color';
import Items from '../../components/Modals/inputItems';

const Home = ({ signOut }) => {
  const navigation = useNavigation();
  const [visibleInputMeta, setVisibleInputMeta] = useState(false);
  const { dataBase } = useData();
  const { meta, setMeta} = useData();

//Logic for introduct the itens in array and save on db async
  const handleSubmit = async (metas: String) => {
    const dataMetas = { id: Date.now(), metas, time: Date.now() };
    const updateMeta = [...meta, dataMetas]
    setMeta(updateMeta)
    await AsyncStorageLib.setItem('meta', JSON.stringify(updateMeta))
  //  console.log(updateMeta)
  }
// Logic for construct the fat and meta object

  var profit = dataBase.map((x) => x.totalGain)
  var newProfit = profit;
  if (newProfit.length > 0)
    var newProfit = profit.reduce((a, b) => (parseFloat(a) + parseFloat(b)).toFixed(2), 0)

  var amountGain = dataBase.map((x) => x.amount)
  var newAmountGain = amountGain;
  if (newAmountGain.length > 0)
    var newAmountGain = amountGain.reduce((a, b) => (parseFloat(a) + parseFloat(b)).toFixed(2), 0)

// Logic for construct the circle porcentage
  var circleMax = meta.map((c) => c.metas)
  var newCircleMax = circleMax;
 // console.log(newCircleMax);

// Logic for using a porcentage in circle
  var porcentageCircle = newAmountGain * 100 / newCircleMax;
 // console.log(porcentageCircle)

  const openData = meta => {
    navigation.navigate('MetaDetails', { meta });
  };

  const renderItem = ({ item }) => <MetaItems onPress={() => openData(item)} item={item} />

  return (
    <View style={styles.container}>
      <View style={styles.profit}>
        {newProfit >= 0 ?
          (<Text style={styles.profitText}>R$ {newProfit}</Text>)
          :
          <Text style={styles.profitText2}>R$ {newProfit}{'\n'}prejuízo</Text>}
      </View>
      <View style={{ flex: 2 }}>
        {meta.length < 1 ?
          (
            <TouchableOpacity
              style={styles.ButtonAddMeta}
              onPress={() => setVisibleInputMeta(true)}
            >
              <Text style={{ marginRight: 5, fontSize: 18 }}>Adicionar Meta</Text>
              <Icon name="pluscircle" size={25} />
            </TouchableOpacity>
          ) : null}
        <View style={styles.boxOne}>
          <View style={styles.fatMeta}>
            <Text style={styles.textFat}>Fat: R$ {newAmountGain}</Text>
            <View>
              <FlatList
                data={meta}
                numColumns={1}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
              />
            </View>
          </View>
          <View style={styles.circleDashboard}>
          <CircularProgress
            initialValue={0}
            inActiveStrokeColor='white'
            activeStrokeColor={Theme.color.activity}
            strokeLinecap={'square'}
            textStyle={{fontSize: 0.1}}
            value={newAmountGain}
            showProgressValue
            title={porcentageCircle.toFixed(2)+'%'}
            titleColor={porcentageCircle >= 0 || 'NaN' ? (Theme.color.activity): Theme.color.errorMessage}
            titleStyle={{fontSize: 20, marginBottom: 50}}
            radius={80} 
            maxValue={newCircleMax}
          />
          </View>
        </View>
        <ScrollView>
          <ButtonMarkets onPress={() => navigation.navigate('Sellers')} title='Adicionar Venda' />
        </ScrollView>
      </View>
      <InputMeta
        onCloseMeta={() => setVisibleInputMeta(false)}
        onSubmitMeta={handleSubmit}
        visible={visibleInputMeta}
        isEdit={false}
        meta={undefined}
      />
    </View>

  );
};

export default Home;
