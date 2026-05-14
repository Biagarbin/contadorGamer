//Importa o React e o useState
//useState serve para criar valores que podem mudar na tela

import React, { useState } from "react";
//Importa componentes nativos do react native

import {
  View, //caixa/área da tela
  Text, //textos
  Button, //Botão
  StyleSheet, // Estilos
  TouchableOpacity, // Botão customizável 
} from "react-native-web";

// Componente principal APP 
export default function App() {

  // Cria uma estado (variáve phpl)chamado "pontos"
  // pontos = valor atual
  //setPontos = função para alterar o valor
  // 0 = valor inicial

  const [pontos, setPontos] = useState(0);
  // Função para aumentar 1 ponto

  function aumentar() {
    // pega o valor auto e soma +1
    setPontos(pontos + 1);
  }

  // Função para diminuir 1 ponto
  function diminuir() {
    // pega o valor atual e subtrai -1 
    setPontos(pontos - 1);
  }

  // Função para resetar o contador
  function resetar() {
    //volta o valor para 0
    setPontos(0);
  }
  // Tudo que esta no RETURN aparece na tela
  return (
    // View principal do APP
    <View style={styles.container}>
      {/* Título do APP */}

      <Text style={styles.titulo}>
        🎮 Contador Gamer
      </Text>

      {/* Mostra o valor dos pontos */}
      <Text style={styles.pontos}>{pontos}</Text>

      {/* Área dos botãos +1 e -1 */}
      <View style={styles.areaBotoes}>
        <TouchableOpacity
          onPress={aumentar}
          style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={diminuir}
          style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        onPress={resetar}
        style={styles.botaoReset}>
        <Text style={styles.textoBotao}>Resetar</Text>
      </TouchableOpacity>

    </View>
  );
}
   // Área de estilos do app
const styles = StyleSheet.create({
  // Estilo da tela principal
  container: {
    // Ocupa a tela toda
    flex: 1,
    // Cor de fundo
    backgroundColor: '#121212',
    // Centraliza horizontalmente
    alignItems: 'center',
    // Centraliza Verticalmente
    justifyContent: 'center',
    // Espaçamento Interno
    padding: 20,
  },
    // Estilo do título
  titulo: {
    //Tamanho da fonte
    fontSize: 32,
    // Cor do texto
    color: '#00ff88',
    //Texto em Negrito
    fontWeight: 'bold',
    // Espaço abaixo
    marginBottom: 30,
  },
    // Estilo os pontos
  pontos: {
    // Tamanho Gigante
    fontSize: 80,
    // Cor Branca
    color: '#ffffff',
    // Espaço abaixo
    marginBottom: 40,
    // Negrito
    fontWeight: 'bold',
  },
    // Área dos Botões
  areaBotoes: {
    // Deixa um Botão ao lado
    flexDirection: 'row',
    // Espaço abaixo
    marginBottom: 20,
  },
    // Estilo dos Botões +1 e -1
  botao: {
    //Cor do botão
    backgroundColor: '#00ff88',
    //Espaçamento vertical
    paddingVertical: 15,
    //Espaçamento horizontal
    paddingHorizontal: 30,
    // Arredonda as Bordas
    borderRadius: 12,
    // Espaço entre Botões
    marginHorizontal: 10,
  },
    // Estilo do Botão resetar
  botaoReset: {
    // Cor Vermelha
    backgroundColor: '#ff3b30',
    // Espaçamentos
    paddingVertical: 15,
    paddingHorizontal: 40,
    // Bordas Arredondadas
    borderRadius: 12,
  },
    // Estilo do Texto dos botões
   textoBotao: {
    // Tamanho da Letra
    fontSize: 22,
    // Cor do Texto
    color: '#000',
    // Negrito
    fontWeight: 'bold',
  },
});