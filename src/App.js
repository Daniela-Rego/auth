import React, { Component } from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import { Button, Header } from './component/common';
import LogInForm from './component/LogInForm';

class App extends Component{

    state = {loggedIn: false};

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBjwWEdLbq4upSgJCznQRPjsiegV_sAod8',
            authDomain: 'autenticacao-724a7.firebaseapp.com',
            databaseURL: 'https://autenticacao-724a7.firebaseio.com',
            projectId: 'autenticacao-724a7',
            storageBucket: 'autenticacao-724a7.appspot.com',
            messagingSenderId: '233755624283',
            appId: '1:233755624283:web:b0f25dc47784e02a'
          });

          firebase.auth().onAuthStateChanged((user) => {
            if(user){  
                this.setState({loggedIn: true});
            }else{
                this.setState({loggedIn: false});
            }    
          });
    }
    renderContent(){
        
        if (!this.state.loggedIn){
            return <LogInForm />;
        }
        
        return(
            <Button>
             Log out
            </Button>   
        );
        
    }



    render(){
        return(
            <View>
                <Header headerText="Autenticação" />
                {this.renderContent()}
            </View>
        );
    }
}



export default App;
