import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import Header from './Header';
import Input from './Input';
import Button from './Button';
import Change from './Change';
import axios from 'axios';

// import firebase from '../database/firebase';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state= {
            displayName:'',
            email:'',
            phoneNumber:'',
            password:'',
            loading:false,
            error:''
        };
    };

    registerUser = () =>{
        if(this.state.email==='' 
          || this.state.password==='' 
          || this.state.contact==='' 
          || this.state.displayName===''){
              Alert.alert('Enter details to signup!')
          } else {
              this.setState({loading:true})
              var body = {
                user_name:this.state.displayName,
                name:this.state.displayName,
                email: this.state.email,
                phone:this.state.phoneNumber,
                password: this.state.password
            }
            // console.log(this.state.email, this.state.phoneNumber);

            axios({
                method: 'post',
                url: 'https://apilearnifii.herokuapp.com/auth/partnersignup',
                data: body
            })
            .then((response)=> {
                 console.log(response);
                this.setState({
                            loading:false,
                            email:'',
                            password:'',
                            displayName:'',
                            phoneNumber:'',
                        })   
                        this.props.navigation.navigate('SignIn');
            })
            .catch((error)=> {
                console.log(error);
                this.setState({
                    loading:false,
                    email:'',
                    password:'',
                    phoneNumber:'',
                    name:'',
                    error:"Please check, Email is already registered"
                })
            });

        // firebase.auth()
        // .createUserWithEmailAndPassword(this.state.email, this.state.password)
        // .then((res) => {
        //     res.user.updateProfile({
        //         displayName:this.state.displayName,
        //         phoneNumber:this.state.phoneNumber,
        //         email:this.state.email
        //     })
        //     this.setState({
        //         loading:false,
        //         displayName:'',
        //         email:'',
        //         phoneNumber:'',
        //         password:''
        //     })
        //     this.props.navigation.navigate('SignIn')
        // })
        // .catch(error => this.setState({errorMessage:error.message, loading:false}))
    };
}

renderButton() {
    if (this.state.loading) {
        return <ActivityIndicator size="large" color='#9E9E9E' />
    }
    return(
        <Button buttonName='Sign Up' onPress={this.registerUser} />
    )
}

    render () {
       
        return (
            <View style={styles.signupContainer} >
                <ScrollView>
                <Header headerText='Sign Up' />
                <Input 
                   value={this.state.displayName}
                   placeholder="Name"
                   onChangeText={displayName=>this.setState({displayName})}
                   />
                <Input 
                   value={this.state.email}
                   placeholder="Email"
                   autoCapitalize
                   onChangeText={email=>this.setState({email})}
                   />
                <Input 
                   value={this.state.contact}
                   placeholder="Mobile Phone"
                   onChangeText={phoneNumber=>this.setState({phoneNumber})}
                   />
                <Input 
                   value={this.state.password}
                   placeholder='Password'
                   autoCapitalize
                   secureTextEntry
                   onChangeText={password=>this.setState({password})}
                   />
                {this.renderButton()}
                <Text style={styles.errorTextStyle} >
                        {this.state.error}
                    </Text>
                <Change 
                   text="Already have an account?" 
                   buttonText="Sign in" 
                   onPress={() => this.props.navigation.navigate('SignIn')}
                    />
                </ScrollView>
            </View>
        );
    }
};

const styles=StyleSheet.create({
    loading:{
        left:0,
        right:0,
        top:0,
        bottom:0,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    signupContainer:{
        marginTop:40,
        flexDirection:'row',
    },
    errorTextStyle: {
        fontSize:20,
        alignSelf:"center",
        color:'red',
        paddingHorizontal:5
    }
});

export default SignUp;