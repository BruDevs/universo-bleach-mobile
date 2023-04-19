import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function SeniorTI(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Arrancars em Bleach </Text>
      <ScrollView>
      <View style={estilo.fundo}>
      <Text style={estilo.conceito}>
      Arrancars são hollows que obtiveram uma evolução ao removerem parte de sua máscara, issso os permitiu terem acesso aos poderes
      de shinigamis, Aizen atual comandante do Hueco mundo os criou com a ajuda de seu artefato o Rogyokou. São similares aos Vizards, diriam até que são sua contraparte, diferente dos shinigamis Arrancars não possuem bankai e sim uma 'Ressureccion' que lhes da uma aparência similar a qual possuiam quando ainda eram Hollows comuns.
      </Text></View>
      <Image style={estilo.img}  source={require('../assets/Arrancars_Grimmjow.jpg')}/>
      <Text style={estilo.subtitulo}>Grimmmjow Jaggerjackes é o Sexto mais poderoso Arrancar de todo o Hueco mundo. 
      Seu tenente atualmente é Momo Hinamori.</Text>
      <Text style={estilo.subtitulo}> Habilidades: </Text>
      <View style={estilo.fundo}>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" size={20} /> Ressuréccion</Text>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" size={20} /> Pele de aço</Text>
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
  margin: 15,
  backgroundcolor: '#1E90FF'
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