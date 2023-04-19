import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import{MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function Shinigami(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Quincys em Bleach </Text>
      <ScrollView>
      <Text style={estilo.conceito}>
      Quincys são seres humanos espiritualmente conscientes, capazes de absorver e manipular o Reishi em armas espirituais.
      </Text>
      <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/Quincys_Ishida.jpg')}/>
      <Text stylo={estilo.subtitulo}> Ishida Uryu - Ultimo quincy vivo!</Text>

      <Text style={estilo.subtitulo}> Habilidades: </Text>
      <View style={estilo.fundo}>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" size={20} /> Absorção de Reishi</Text>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" size={20} /> Disparo com arcos</Text>
      <Text style={estilo.topicos}> <AntDesign name="doubleright" size={20} /> Visualização do mundo espiritual</Text>
      
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