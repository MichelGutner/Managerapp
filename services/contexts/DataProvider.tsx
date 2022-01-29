import AsyncStorageLib from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react'


const DataContext = createContext({});
const DataProvider = ({children}: any) => {
    const [dataBase, setDataBase] = useState([]);

    const findData = async () => {
        const result = await AsyncStorageLib.getItem('data');
        if(result !== null) setDataBase(JSON.parse(result))
    };

    useEffect(() => {
        findData()
    }, [])

    return(
        <DataContext.Provider value = {{dataBase, setDataBase, findData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);

export default DataProvider;