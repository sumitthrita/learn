import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, ActivityIndicator, Alert, Text} from 'react-native';
import Header from './Header';
import Input from './Input';
import Button from './Button';
import Change from './Change';
// const axios = require('axios');
import axios from 'axios';

// import firebase from '../database/firebase';



class SingIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            loading:false,
            error:''
        };
    };

    userLogin= () => {
        this.setState({error:''})
        if(this.state.email==='' && this.state.password===''){
            Alert.alert("Enter details to signin!")
        } else {
            this.setState({loading:true})
            var body = {
                email: this.state.email,
                password: this.state.password
            }

            axios({
                method: 'post',
                url: 'https://apilearnifii.herokuapp.com/auth/partnerlogin',
                data: body
            })
            .then((response)=> {
                 //console.log(response);
                this.setState({
                            loading:false,
                            email:'',
                            password:'',
                        })
                        this.props.navigation.navigate('Dashboard',{
                            token:response.data.accessToken
                        });
            })
            .catch(()=> {
                this.setState({
                    loading:false,
                    email:'',
                    password:'',
                    error:'Email id or password is incorrect'
                })
            });

            // firebase.auth()
            // .signInWithEmailAndPassword(this.state.email, this.state.password)
            // .then((res) => {
                
            //     this.setState({
            //         loading:false,
            //         email:'',
            //         password:''
            //     })
            //     this.props.navigation.navigate('Dashboard')
            // })
            // .catch((error) => this.setState({errorMessage:error.message, loading:false}))
        }
    }

    renderButton() {
        if (this.state.loading) {
            return <ActivityIndicator size="large" color='#9E9E9E' />
        }
        return(
            <Button buttonName="Sign In" onPress={this.userLogin} />
        )
    }

    render() {
    //    if(this.state.loading){
    //        return(
    //            <View style={styles.loading} >
    //                <ActivityIndicator size='large' color='#9E9E9E' />
    //            </View>
    //        );
    //    }
        return (
            <View style={styles.signInContainer} >
                <ScrollView>
                    <Header headerText="Log In" />
                    <Input 
                       value={this.state.email}
                       placeholder="Email"
                       onChangeText={email=>this.setState({email})}
                       />
                    <Input    
                       value={this.state.password}
                       placeholder="Password"
                       secureTextEntry
                       onChangeText={password=>this.setState({password})}
                       />
                    {this.renderButton()}
                    <Text style={styles.errorTextStyle} >
                        {this.state.error}
                    </Text>
                    <Change 
                      text="Don't have an account" 
                      buttonText="Sign up" 
                      onPress={() => this.props.navigation.navigate('SignUp')} 
                      />
                      
                </ScrollView>
                
            </View>
        );
    }
};

const styles=StyleSheet.create({
    loading: {
        left:0,
        right:0,
        top:0,
        bottom:0,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    signInContainer:{
        marginTop:100,
        flexDirection:'row'
    },
    errorTextStyle: {
        fontSize:20,
        alignSelf:"center",
        color:'red'
    }
});

export default SingIn;