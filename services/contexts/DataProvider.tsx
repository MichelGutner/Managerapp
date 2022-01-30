import AsyncStorageLib from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react'


const DataContext = createContext({});
const DataProvider = ({children}: any) => {
    const [dataBase, setDataBase] = useState([]);
    const [meta, setMeta] = useState([]);

    const findMeta = async () => {
        const result = await AsyncStorageLib.getItem('dataMeta');
        if (result !== null) setMeta(JSON.parse(result))
    };

    const findData = async () => {
        const result = await AsyncStorageLib.getItem('data');
        if(result !== null) setDataBase(JSON.parse(result))
    };

    useEffect(() => {
        findData();
        findMeta();
    }, [])

    return(
        <DataContext.Provider value = {{dataBase, setDataBase, findData, meta, setMeta, findMeta}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);

export default DataProvider;