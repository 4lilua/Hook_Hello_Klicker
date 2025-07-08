/*Grupo: Aline Silvério Mendes e Luana de Carvalho Bonfim*/

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, Pressable, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './BotaoInterativoStyle';

//Ordenação das imagens em um vetor
const emotes = [
  require('../../assets/morta.png'),
  require('../../assets/doente.png'),
  require('../../assets/medo.png'),
  require('../../assets/triste.png'),
  require('../../assets/chorando.png'),
  require('../../assets/mal.png'),
  require('../../assets/do.png'),
  require('../../assets/dormindo.png'),
  require('../../assets/normal.png'),
  require('../../assets/raivosa.png'),
  require('../../assets/pensativa.png'),
  require('../../assets/feliz.png'),
  require('../../assets/fome.png'),
  require('../../assets/empolgada.png'),
  require('../../assets/rindo.png'),
  require('../../assets/vergonha.png'),
  require('../../assets/corada.png'),
  require('../../assets/timida.png'),
  require('../../assets/amor.png'),
  require('../../assets/piscadela.png'),
  require('../../assets/descolada.png'),
  require('../../assets/hello_kitty_paz.png'),
]

export function BotaoKitty() {
  //Utilização de Hooks para gerenciar o estado das variáveis 
  const [qtd, setQtd] = useState(0); //Contador total de cliques
  const [contador, setContador] = useState(0); //Índice do emote atual
  const [pressionado, setPressionado] = useState(false); //Estado de pressionamento
  const [tempoClique, setTempoClique] = useState(0); //Tempo em segundos
  const [mediaClique, setMediaClique] = useState(0); //Média de cliques por segundo
  const [pressInicio, setPressInicio] = useState(false); //Identificação do primeirpo clique
  const img = emotes[contador % emotes.length]; 
  
  function adicionar() {
    const novoQtd = qtd + 1; //Percorre o vetor das imagens
    setQtd(novoQtd);
    if(tempoClique === 0){
      setTempoClique(tempoClique + 1); //Adiciona um clique a cada interação com o botão da Hello Kitty
    }
    if (!pressInicio) {
      setPressInicio(true); //Inicia o cronômetro
    }
    if (novoQtd % 5 === 0) {
      setContador((prev) => prev + 1); //Muda a imagem a cada 5 cliques
    }
  }
  
  function pressionarLongo() {
    //Ao pressionar o botão interativo da Hello Kitty, aparece a velocidade média de cliques por segundo
    let aux = qtd / tempoClique;
    Alert.alert("Média de cliques por segundo", "" + aux.toFixed(3));
    setMediaClique(aux);
  }

  function calcularVelMedia() {
    //Calcula a velocidade média da quantidade de cliques por segundo
    if (tempoClique > 0) {
      setMediaClique(qtd / tempoClique);
    } else {
      setMediaClique(0);
    }
  }
  
  useEffect(() => {
    //Assim que o botão interativo da Hello Kitty por clicado pela primeira vez, o cronômetro inicia
    console.log('useeffect - ', pressInicio);
    if(!pressInicio) return;

    const timer = setInterval(() => {
        setTempoClique((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer); //Limpeza do timer
  }, [tempoClique]);

  function zerarContadores() {
    //Reinicia a contagem ou o estado das variáveis, bem como o cronômetro
    setQtd(0);
    setContador(0);
    setTempoClique(0);
    setMediaClique(0);
    setPressInicio(false);
  }

  return (
    <LinearGradient
      colors={['#ed91e4', '#ed91e4', '#fac5f5', '#fce6fa', '#fac5f5', '#ed91e4', '#ed91e4']}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 0.7}}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Pressable
          onPress={adicionar}
          onPressIn={() => setPressionado(true)}
          onPressOut={() => setPressionado(false)}
          onLongPress={pressionarLongo}
        >
          <ImageBackground
            source={img}
            style={{
              width: 200,
              height: 200,
              marginBottom: 20,
              opacity: pressionado ? 0.5 : 1.0
            }}
          />
        </Pressable>  
        <View>
            <Text style={styles.text}>
              Total de cliques: {qtd}
            </Text>
            <Text style={styles.text}>
              Tempo total: {tempoClique}
            </Text>
            <Text style={styles.text}>
              Velocidade de cliques: {mediaClique.toFixed(3)}
            </Text>
        </View>
        <Pressable style={styles.botao} onPress={(zerarContadores)}>
            <Text style={styles.textBotao}>ZERAR</Text>
        </Pressable>
      </View>
    </LinearGradient >
  );
}
