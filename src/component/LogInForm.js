import React, { Component } from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
    //estado inicial
    state ={ email: '', senha:'', erro:'', loading: false};
    
    
    
    onButtonPress(){
        const {email, senha} = this.state;
        //depois que o botão for precionado quero que tenha  estado vazio
        this.setState({erro: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(this.onLoginSucess.bind(this))
        .catch(()=> {
            firebase.auth().createUserWithEmailAndPassword(email, senha)
               .then(this.onLoginSucess.bind(this))
                .catch(this.onLoginFail.bind(this));
        });
    
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size= "small" />;
        }
        
            return(
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
            );
        
    }

    onLoginFail(){
        this.setState({
            erro: 'Autentication fail',
            loading: false
        });
    }
    
    onLoginSucess(){
        this.setState({

            email: '',
            senha: '',
            loading: false,
            erro: ''
        });
        
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                         
                         placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                     
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="senha"
                        label="Senha"
                        value={this.state.senha}
                        onChangeText={senha => this.setState({senha})}
                     
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.erro}
                </Text>

                <CardSection>
                    {this.renderButton()}
                     
                </CardSection>
            </Card>
        );
    }
}




const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red',
    },
};




export default LoginForm;

