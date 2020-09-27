import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './Button';
import axios from 'axios';
// import firebase from '../database/firebase';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            name:'',
            phone:''
        }
    };
    componentDidMount(){
       const token=this.props.route.params.token;
        console.log("yeahs");
        console.log(token);
        
        axios({
            method:"get",
            url:"https://apilearnifii.herokuapp.com/getpartnerprofile",
            headers:{
                'Authorization':'Bearer '+token
            }
        })
        .then((response)=>{
            console.log(response.data[0].name);
            this.setState({
                email:response.data[0].email,
                name:response.data[0].name,
                phone:response.data[0].phone
            });
        })
        .catch((error)=>{
            console.log(error);
            console.log("something");
        })
         
        // const user=firebase.auth().currentUser
        // console.log(user);
        // return this.setState({
        //     displayName:user.displayName,
        //     uid:user.uid,
        //     emailid:user.email,
            
        // });
    };
   

    signOut = () => this.props.navigation.navigate('SignIn');
    
     
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.textStyle} >
                    Hello, {this.state.name}
                </Text>
                <Text>
                    Your Email id is {this.state.email}
                </Text>
                <Text>
                    Your Phone no. is {this.state.phone}
                </Text>
                

                <Button 
                  buttonName="LogOut"
                  onPress={this.signOut}
                  />
            </View>
        );
    }
    
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:35,
        backgroundColor:'#fff'
    },
    textStyle:{
        fontSize:15,
        marginBottom:20
        }
});

export default Dashboard;

