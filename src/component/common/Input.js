import React, { Component} from 'react';
import { View,Text,TextInput }from 'react-native';

const Input = ({label, value, onChangeText,placeholder,secureTextEntry}) =>{
   
   const { inputStyle,labelStyle,containerStyle} = styles;
   
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect = {false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
   );
   

};
export {Input};
//propriedade 'flex' é o tamanho do espaço que cada teg vai ocupar,temos um container com filhos e esse filhos tem a propiedade 'flex'. 
// como é feita a divisão: soma o valor das duas propriedades nesse caso 3, e se divide pelo total que é 3 tbm... o total sempre vai ser o 
//valor da soma.O resultado da divisão vai ser o tamanho ocupado por cada um. Ou seja, o InputStyle vai ser 2/3 da tela e
//label style vai ser :1/3 da tela
const styles = {
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2,
    },
    labelStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1,
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },

}