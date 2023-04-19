import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function Hollow(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Hollows em Bleach </Text>
      <ScrollView>
      <Text style={estilo.conceito}>
      Hollows são criaturas do hueco mundo que se alimentam de almas. São almas não resgatadas que acabaram se corrompendo
      Um hollow apesar de ser uma criatura irraciona, caso consiga evoluir o suficiente pode se tornar um Arrancar
      </Text>
      <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/hollow.jpg')}/>
      <Text style={estilo.subtitulo}> Hollow </Text>
      <Text style={estilo.subtitulo}> Habilidades: </Text>
      <View style={estilo.fundo}>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" /> Força fisíca</Text>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" /> Voar </Text>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" /> Transitar entre dimensões</Text>
    
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
  backgroundcolor: '#ff3456'
}
})