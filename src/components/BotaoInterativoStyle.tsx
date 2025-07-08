import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, //Ocupa todo espaço disponível
        justifyContent: 'center', //Centraliza verticalmente
        alignItems: 'center', //Centraliza horizontalmente
    },
    gradient: {
        //Definição de tamanho e proporção do background do aplicativo
        flex: 1,
        width: '100%', //Largura total
        height: '100%', //Altura total
    },
    text: {
        //Definição de cores, tamanhos, bordas e posições dos textos do aplicativo
        fontSize: 22, 
        marginBottom: 10,
        color: '#000',
    },
    botao:{
        //Definição de cores, tamanhos, bordas e posições no botão zerar
        backgroundColor: '#ef9fe7',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#e147d2'
    },
    textBotao:{
        //Definição de cor e tamanho do texto 'ZERAR' do botão zerar
        fontSize: 25,
        color: '#000',
    },
});