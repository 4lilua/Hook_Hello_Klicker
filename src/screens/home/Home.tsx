/*Grupo: Aline Silvério Mendes e Luana de Carvalho Bomfim*/

import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../components/BotaoInterativoStyle';
import { BotaoKitty } from '../../components/BotaoInterativo';


export default function Home() {
//Chama os componentes
    return (
        <View style={styles.container}>

            <BotaoKitty></BotaoKitty>
            
            <StatusBar style="light" />

        </View>
    )
}
