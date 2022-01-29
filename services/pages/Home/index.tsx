import React, { useState } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View } from 'react-native';
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator';
import { Theme } from '../../../themes/color';
import ButtonMarkets from '../../components/ButtonsMarkets';
import Items from '../../components/Modals/inputItems';
import { useData } from '../../contexts/DataProvider';
import MercadoLivrePage from '../MercadoLivre';
import { styles } from './styles';


const Home = ({ signOut, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { dataBase } = useData();


  return (
    <View style={styles.container}>
      <View style={{flex: 0, backgroundColor: Theme.color.box, height: 120}}>

      </View>
      <View style={{ flex: 2 }}>
        <View style={styles.boxOne}>
          <View style={styles.fatMeta}>
            <Text style={styles.textFat}>Faturamento: R$25,620</Text>
            <Text style={styles.textMeta}>Meta: R$6000,000</Text>
          </View>
          <View style={styles.circleDashboard}>
            <CircularProgressWithChild
              value={30}
              circleBackgroundColor={undefined}
              activeStrokeColor={Theme.color.Blue}
              radius={80}
            />
          </View>
        </View>
        <ScrollView style={styles.headerButtons}>
          <ButtonMarkets onPress={() => setModalVisible(true)} title='Mercado Livre' />
          <ButtonMarkets style={{ marginTop: 10 }} onPress={() => {}} title='Shopee' />
        </ScrollView>
      </View>
      <MercadoLivrePage
        onClose={() => setModalVisible(false)}
        visible={modalVisible} navigation={undefined} />
    </View>

  );
};

export default Home;
