import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function SeniorTI(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Vizards em Bleach </Text>
      <ScrollView>
      <Text style={estilo.conceito}>
      Vizards são a contra parte dos Arrancars, ou seja, Shinigamis que obtiveram os poderes de um Hollow. Surgiram durantte uma experiência do antigo capitão Aizen Sousuke, que fizera experimentos ilegais com membros do esquadrão antigo do Gotei 13 incluindo o seu até então Capitão Hirako Sinji. Possuem máscara semelhantes as usadas por hollows que aumentam sua habilidades e poderes.
      </Text>
      <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/hirako_vaizard.jpg')}/>
      <Text style={estilo.subtitulo}>Hirako Sinji é o capitão da 5ª Divisão no Gotei 13. 
      Seu tenente atualmente é Momo Hinamori.</Text>
      <Text style={estilo.subtitulo}> Habilidades: </Text>
      <View style={estilo.fundo}>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" size={20} /> Shikai e Bankai</Text>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" size={20} /> Controle de Reiatsu</Text>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" size={20} /> Holliwficação</Text>
      </View></ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width ;

const estilo = StyleSheet.create({

container: {
  flex: 1,
  backgroundcolor:'#8590FF',
},
titulo: {
marginTop: 30,
marginBottom: 20,
fontSize: 30,
alignSelf: 'center'
},
conceito:{
  fontSize: 18,
  textAlign: 'justify',
  margin: 15
},
subtitulo: {
  fontSize: 20,
  marginBottom: 20,
  marginLeft: 20
},
topicos: {
  fontSize: 20,
  marginLeft: 20
},
img:{
  borderRadius: 10,
  margin: 10,
  alignSelf: 'center'
},
fundo:{
  borderRadius: 20,
  marginHorizontal: 10,
  backgroundcolor: '#000'
}
})