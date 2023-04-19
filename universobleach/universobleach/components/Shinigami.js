import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function Shinigami(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Shinigamis em Bleach </Text>
      <ScrollView>
      <Text style={estilo.conceito}>
      Shinigamis ou ceifeiros de almas, são os operantes que atuam na transição das almas falecidas até a soul society.
      Responsáveis por evitar os ataques dos hollows as almas inocentes, possuem um comando de 13 divisões cada uma supervisionada por um capitão, sendo este um exímio lutador e possuindo como requisito para função uma bankai. 
      </Text>
      <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/shinigami.jpg')}/>
      <Text stylo={estilo.subtitulo}> Zaraki Kenpachi Capitão da 11ª divisão</Text>
      <Text style={estilo.subtitulo}> Habilidades: </Text>
      <View style={estilo.fundo}>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" size={20} /> Shikai e em alguns casos Bankai</Text>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" size={20} /> feitiços chamados kidous</Text>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" size={20} /> Controle de reiatsu</Text>
      
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