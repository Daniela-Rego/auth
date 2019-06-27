import React from 'react';
import {Text, View } from 'react-native';

const Header = (props) => {
    //PRECISEI DIZER QUE O OBEJRETO ERA IGUAL A ESSA VARIAVEL
    //const {nome da propriedade} = nome do objeto;
    const { textStyle, viewStyle } = styles;


    return ( 
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );      

};

//criamos um objeto chamado styles 
const styles = {

 /* o obejto estilo vai ter um propriedade chamada textStyle
e essa propriedade vai fazer alguma coisa, que no caso é 
aumentar a fonte.
 width = largura
  height = altura
 */
viewStyle:{
    
    backgroundColor: '#F8F8F8',
    //backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
    height:60,
    paddinTop:15,
    shadowColor: '#000',
    shadowOffset: { width: 0 , height: 20 },
    ShadowOpacity: 0.5,
    elevation:2,
    position: 'relative',
    
},
 textStyle:{
    fontSize:20
}
};

export { Header} ; 