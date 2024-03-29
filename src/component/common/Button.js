import React from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
    return (

        <TouchableOpacity 
            onPress={onPress} 
            style={styles.buttonStyle}
        >
            
            <Text style={styles.textStyle}> 
                {children}
             </Text>
        </TouchableOpacity>
    );  
};

/*const styles = {
    textStyle:{
        alignSelf: 'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderEadius: 5,
        borderWidth: 1,
        //borderColor: '#007aff',
        borderColor: 'red',
        marginLeft:5,
        marginRight:5
        
    }
}*/
const styles = StyleSheet.create({

    textStyle:{
        alignSelf: 'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius: 5,
        borderWidth: 1,
        //borderColor: '#007aff',
        borderColor: 'red',
        marginLeft:5,
        marginRight:5
        
    }


})


export { Button };